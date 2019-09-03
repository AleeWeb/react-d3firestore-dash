import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './Auth';
import LogIn from './components/login/Login';
import SignUp from "./components/login/SignUp";
import DashHome from './components/dashboard/DashHome';
import '../src/assets/style/styles.scss';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LogIn} />
          <Route path="/dashboard" component={DashHome} />
          <Route path="/register" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
