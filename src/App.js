
import Hero from './pages/hero.jsx';
import {BrowserRouter, Switch, Route} from "react-router-dom";

<script src="../path/to/flowbite/dist/flowbite.js"></script>


function App() {
  return (
        <BrowserRouter>

        <Switch>
          <Route exact path="//" component={Hero}></Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
