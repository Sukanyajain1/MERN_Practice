import './App.css';
import React, {useState} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  // Link 
} from "react-router-dom";
// import Main from "./Main";
import AllStudents from './components/AllStudents';
import NewStudentForm from './components/NewStudentForm';
import OneStudent from './components/OneStudent';
import EditStudent from './components/EditStudent';

function App() {

const [newStudentToggle, setNewStudentToggle] = useState(false);

  return (
    <BrowserRouter>
      <div className="App container">
        {/* <Main></Main> */}
        <h1>Wall of Students</h1>
        <Switch>
          <Route exact path= "/">
            <NewStudentForm newStudentToggle={newStudentToggle} setNewStudentToggle= {setNewStudentToggle}></NewStudentForm>
            <hr/>
            <AllStudents newStudentToggle={newStudentToggle}></AllStudents>
          </Route>
          <Route exact path= "/students/:_id">
            <h1> Showing one student</h1>
            <OneStudent></OneStudent>
          </Route>
          <Route exact path= "/edit/:_id">
            <EditStudent></EditStudent>
          </Route>
          <Route exact path= "/students/delete/:_id">
          </Route>
          <Route exact path= "/students/random">
          </Route>
          <Route exact path= "/students/new">
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
