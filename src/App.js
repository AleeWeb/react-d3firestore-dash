import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './Auth';
import LogIn from './components/login/Login';
import DashHome from './components/dashboard/DashHome';
import '../src/assets/style/styles.scss';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LogIn} />
          <Route path="/dashboard" component={DashHome} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
