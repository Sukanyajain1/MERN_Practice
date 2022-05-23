import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import AllStudents from './components/AllStudents';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <h1>Wall of Students</h1>
      <Switch>
        <Route exact path = "/">
          <AllStudents></AllStudents>
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
