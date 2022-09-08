import React from "react";
import {
  ColumnDirective,
  ColumnsDirective,
  KanbanComponent,
} from "@syncfusion/ej2-react-kanban";
import { DataManager, ODataAdaptor } from "@syncfusion/ej2-data";

class KanbanBoard extends React.Component {
  public kanbanRemoteDatasource: DataManager = new DataManager({
    url: "https://ej2services.syncfusion.com/production/web-services/api/Kanban",
    adaptor: new ODataAdaptor(),
    crossDomain: true,
  });
  public kanbanDatasource: Object[] = [
    {
      Id: "Task 1",
      Title: "Task - 29001",
      Status: "Open",
      Summary: "Analyze the new requirements gathered from the customer.",
      Type: "Story",
      Priority: "Low",
      Estimate: 3.5,
      Assignee: "Nancy Davloio",
    },
    {
      Id: "Task 2",
      Title: "Task - 29002",
      Status: "In Progress",
      Summary: "Improve application performance",
      Type: "Improvement",
      Priority: "Normal",
      Estimate: 6,
      Assignee: "Andrew Fuller",
    },
    {
      Id: "Task 3",
      Title: "Task - 29003",
      Status: "Open",
      Summary:
        "Arrange a web meeting with the customer to get new requirements.",
      Type: "Others",
      Priority: "Critical",
      Estimate: 5.5,
      Assignee: "Janet Leverling",
    },
    {
      Id: "Task 4",
      Title: "Task - 29004",
      Status: "In Progress",
      Summary: "Fix the issues reported in the IE browser.",
      Type: "Bug",
      Priority: "Critical",
      Estimate: 2.5,
      Assignee: "Janet Leverling",
    },
    {
      Id: "Task 5",
      Title: "Task - 29005",
      Status: "Review",
      Summary: "Fix the issues reported by the customer.",
      Type: "Bug",
      Priority: "Low",
      Estimate: "3.5",
      Assignee: "Steven walker",
    },
  ];
  public cardTooltipTemplate(data: any): JSX.Element {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <b>Assignee : </b>
              </td>
              <td>{data.Assignee}</td>
            </tr>
            <tr>
              <td>
                <b>Type : </b>
              </td>
              <td>{data.Type}</td>
            </tr>
            <tr>
              <td>
                <b>Estimate : </b>
              </td>
              <td>{data.Estimate}</td>
            </tr>
            <tr>
              <td>
                <b>Summary : </b>
              </td>
              <td>{data.Summary}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  render() {
    return (
      <KanbanComponent
        dataSource={this.kanbanRemoteDatasource}
        keyField="Status"
        cardSettings={{
          contentField: "Summary",
          headerField: "Id",
          selectionType: "Multiple",
        }}
        width="100%"
        height="100%"
        swimlaneSettings={{ keyField: "Assignee" }}
        enableTooltip={true}
        tooltipTemplate={this.cardTooltipTemplate}
      >
        <ColumnsDirective>
          <ColumnDirective headerText="To Do" keyField="Open"></ColumnDirective>
          <ColumnDirective
            headerText="In Progress"
            keyField="In Progress"
          ></ColumnDirective>
          <ColumnDirective
            headerText="Review"
            keyField="Review"
            minCount={1}
            maxCount={3}
          ></ColumnDirective>
          <ColumnDirective
            headerText="Testing"
            keyField="Testing"
            minCount={5}
            maxCount={8}
          ></ColumnDirective>
          <ColumnDirective
            headerText="Close"
            keyField="Close"
          ></ColumnDirective>
        </ColumnsDirective>
      </KanbanComponent>
    );
  }
}

export default KanbanBoard;
