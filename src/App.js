import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Booking from "./Pages/Home/Booking/Booking";
import Register from "./Pages/Login/Register/Register";
import Login from "./Pages/Login/Login/Login";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./Pages/Login/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Shop from "./Pages/Home/Shop/Shop";
import Product from "./Pages/Home/Home/Product/Product";


function App() {
  return (
    <div className="App">

      <AuthProvider>
      <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/shop">
            <Shop/>
          </Route>
          <PrivateRoute path="/booking/:productId">
            <Booking />
          </PrivateRoute>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
