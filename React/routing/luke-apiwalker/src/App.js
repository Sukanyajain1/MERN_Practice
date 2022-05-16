// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Form from './components/Form';
import Result from './components/Result';


function App() {
  return (
    <BrowserRouter>
      <div className="App container mt-5">
        <h1 style={{textAlign: "center"}}>Luke APIWalker</h1><br/>
        <Form></Form>
        <Switch>
          <Route exact path="/:category/:id">
            <Result></Result>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
