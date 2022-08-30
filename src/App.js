
import Explore from './components/Explore.jsx';
import Dash from './components/Dash';
import Events from './components/Event.jsx';
import Dm from './components/Dm.jsx';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Sidebar from './components/Sidebar.jsx';
import Navbar from './components/Navbar.jsx';

<script src="../path/to/flowbite/dist/flowbite.js"></script>


function App() {
  let Component;
  switch(window.location.pathname){
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
  }
  return (
    <>
    <div className='nav'>
      <Navbar />
</div>
    
        <BrowserRouter>
        <div className='container grid grid-cols-1 md:grid-cols-5'>
          <div className='grid '>
        <Sidebar>
        <Switch>
          <Route exact path="/" component={Dash}></Route>
          <Route path="/explore" component={Explore}></Route>
          <Route path="/events" component={Events}></Route>
          <Route path="/dm" component={Dm}></Route>
        </Switch>
        </Sidebar>
        </div>
        <div className='grid col-span-3 py-4 px-4'>
        <div className="grid shadow-lg h-52 border bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-white my-2">
            <span className="text-[20px]">Community banner</span>
          </div>
            <Component />
        </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
