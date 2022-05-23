import './App.css';
import React, {useState} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  // Link 
} from "react-router-dom";
// import Main from "./Main";
import AllProducts from './components/AllProducts';
import NewProductForm from './components/NewProductForm';
import OneProduct from './components/OneProduct';
import EditProduct from './components/EditProduct';

function App() {

const [newProductToggle, setNewProductToggle] = useState(false);

  return (
    <BrowserRouter>
      <div className="App container">
        {/* <Main></Main> */}
        <h1>Wall of Products</h1>
        <Switch>
          <Route exact path= "/">
            <NewProductForm newProductToggle={newProductToggle} setNewProductToggle= {setNewProductToggle}></NewProductForm>
            <hr/>
            <AllProducts newProductToggle={newProductToggle}></AllProducts>
          </Route>
          <Route exact path= "/products/:_id">
            <h1> Showing One Product</h1>
            <OneProduct></OneProduct>
          </Route>
          <Route exact path= "/edit/:_id">
            <EditProduct></EditProduct>
          </Route>
          <Route exact path= "/products/delete/:_id">
          </Route>
          <Route exact path= "/products/random">
          </Route>
          <Route exact path= "/products/new">
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
