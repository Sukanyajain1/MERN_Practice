import './App.css';
import React, {useState} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";
// import Main from "./Main";
import AllAuthors from './components/AllAuthors';
import NewAuthorForm from './components/NewAuthorForm';
import OneAuthor from './components/OneAuthor';
import EditAuthor from './components/EditAuthor';

function App() {

const [newAuthorToggle, setNewAuthorToggle] = useState(false);

  return (
    <BrowserRouter>
      <div className="App container">
        {/* <Main></Main> */}
        <h1>Wall of Authors</h1>
        <Link to="/new" >Add New Author</Link>


        <Switch>

    {/* ALL AUTHORS */}
    {/* =============================================================================================================================================== */}
          <Route exact path= "/">
            <AllAuthors newAuthorToggle={newAuthorToggle}></AllAuthors>
          </Route>
    {/* =============================================================================================================================================== */}




    {/* CREATE NEW AUTHOR */}
    {/* =============================================================================================================================================== */}
          <Route exact path= "/new">
            <NewAuthorForm newAuthorToggle={newAuthorToggle} setNewAuthorToggle= {setNewAuthorToggle}></NewAuthorForm>
            <br/>
            <Link className = "btn btn-primary" to="/">Cancel</Link>
          </Route>
    {/* =============================================================================================================================================== */}




    {/* SHOW ONE AUTHOR */}
    {/* =============================================================================================================================================== */}
          <Route exact path= "/authors/:_id">
            <h1> Showing One Author</h1>
            <OneAuthor></OneAuthor>
            <br/>
            <Link className = "btn btn-primary" to="/">Cancel</Link>
          </Route>
    {/* =============================================================================================================================================== */}




    {/* EDIT AUTHOR */}
    {/* =============================================================================================================================================== */}
          <Route exact path= "/edit/:_id">
            <EditAuthor></EditAuthor>
            <br/>
            <Link className = "btn btn-primary" to="/">Cancel</Link>
          </Route>
    {/* =============================================================================================================================================== */}


        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

