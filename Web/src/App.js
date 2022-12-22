// eslint-disable-next-line
import './App.css';
import { Todo } from './Components/Todo';
import { Signup } from './Components/Signup.js';
import { Signin } from './Components/Signin.js';
import { Main } from './Components/Main.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import {store} from './Redux/store.js'

function App() {
  return (
    <Provider store={store}>


      <div className="main">
        <h2>Welcome to the World</h2>

        <Router >
          <Switch>
            <Route path="/todo">
              <Todo />
            </Route>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </Router >
      </div >
    </Provider>

  );
}

export default App;
