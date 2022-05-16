
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter, //BrowserRouter will enable routing for the application, otherwise the routing features will not work.
  Switch, //Switch lets us determine which components/elements need to show up only at certain routes.
  Route, //Route lets us specify the route url 
  Link //Link is just link an a href {anchor tag} but it will not reload the page
} from 'react-router-dom';
import About from './components/About';
import Players from './components/Players';
import Teams from './components/Teams';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Welcome to routing demo</h1>
        <div className= "navbar">
          <h1>Routing Intro</h1>
          <ul id= "navlinks">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/players">Players</Link></li>
            <li><Link to="/teams">Teams</Link></li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/players">
            <Players></Players>
          </Route>
          <Route exact path="/teams">
            <Teams></Teams>
          </Route>
          <Route exact path="/teams/:id">
            {/* a variable inside a route is called a route parameter */}
            <Teams></Teams>
          </Route>
          <Route exact path="/teams/:id/:color">
            <Teams></Teams>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
