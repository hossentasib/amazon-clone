import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from "./firebase.config";
import { useStateValue } from "./StateProvider";

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/checkout'>
            <Header></Header>
            <Checkout></Checkout>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/'>
            <Header></Header>
            <Home></Home>
          </Route>
          <Route path='*'>
            <h1>404 Error!</h1>
          </Route>
        </Switch>
     </div>
    </Router>
  );
}

export default App;
