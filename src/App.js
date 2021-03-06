import "./App.css";
import { Router, Switch, Route } from "react-router-dom";

import Quizes from "./Pages/Quizes/Quizes";
import QuizForm from "./Pages/Quizes/QuizForm";
import { history } from "./redux/_helpers/history";
import TakeQuiz from "./Pages/Quizes/TakeQuiz";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Quizes} />
          <Route exact path="/New-Quiz" component={QuizForm} />
          <Route exact path="/Update-Quiz" component={QuizForm} />
          <Route exact path="/Take-Quiz" component={TakeQuiz} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
