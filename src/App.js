import Explore from "./components/Explore.jsx";
import Dash from "./components/Dash";
import Events from "./components/Event.jsx";
import Dm from "./components/Dm.jsx";
import { BrowserRouter, Router, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";
import Introduction from "./pages/Introduction.jsx";
import UserInputForm from "./pages/form/UserInputForm.jsx";
import LoginForm from "./pages/form/LoginForm.jsx";
import Settings from "./pages/form/Settings.jsx";
import KanbanBoard from "./pages/KanbanBoard.jsx";
import Navigation from "./components/Navigation.jsx";
import Banner from "./components/Banner.jsx";

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Dash;
      break;
    case "/explore":
      Component = Explore;
      break;
    case "/events":
      Component = Events;
      break;
    case "/dm":
      Component = Dm;
      break;
    case "/Introduction":
      Component = Introduction;
      break;
    case "/form":
      Component = UserInputForm;
      break;
    case "/login":
      Component = LoginForm;
      break;
    case "/settings":
      Component = Settings;
      break;
    case "/KanbanBoard":
      Component = KanbanBoard;
      break;
  }
  return (
    <>
      <div className="nav sticky top-0">
        <Navigation />
        <Navbar />
      </div>

      <BrowserRouter>
        <div className="container grid grid-cols-1 md:grid-cols-5 ">
          <div className="grid ">
            <Sidebar>
              <Router>
                <Route exact path="/" component={Dash}></Route>
                <Route path="/explore" component={Explore}></Route>
                <Route path="/events" component={Events}></Route>
                <Route path="/dm" component={Dm}></Route>
                <Route path="/Introduction" component={Introduction}></Route>
                <Route path="/form" component={UserInputForm}></Route>
                <Route path="/login" component={LoginForm}></Route>
                <Route path="/Settings" component={Settings}></Route>
                <Route path="/KanbanBoard" component={KanbanBoard}></Route>
              </Router>
            </Sidebar>
          </div>
          <div className="grid md:col-span-4 lg:col-span-3  py-4 px-4">
            <Component />
          </div>
          <div></div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
