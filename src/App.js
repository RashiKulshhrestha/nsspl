import Login from "./components/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import AddEmployee from "./components/Dashboard/AddEmployee";
import './App.css';
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/add-employee" component={AddEmployee}/>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
