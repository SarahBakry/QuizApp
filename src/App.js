import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import Quizes from "./Pages/Quizes/Quizes";

function App() {
  const history = createBrowserHistory();

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Quizes} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
