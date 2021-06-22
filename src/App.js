import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { HomePage, LoginPage, RegisterPage } from "./pages"

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/" component={LoginPage} exact />
            <Route path="/home" component={HomePage} exact />
            <Route path="/login" component={LoginPage} exact />
            <Route path="/register" component={RegisterPage} exact />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
