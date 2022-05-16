import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Display from './components/Display';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/:id">
            <Display></Display>
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/:id/:color1/:color2">
            <Display></Display>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
