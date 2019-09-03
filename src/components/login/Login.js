import React, { useCallback, useContext } from "react";
import { Col, Row, Button } from 'reactstrap';
import { withRouter, Redirect } from 'react-router-dom';
import app from "../../firebaseConfig";
import { AuthContext } from "../../Auth";
import GoogleSignIn from './GoogleSignIn';

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

  return (

    <div className="login-wrap">

      <Row className="row align-items-center left-inner-wrap">

        <Col md={6} className="login-left">

          <h4 className="login-header">Welcome!</h4>

          <h6 className="login-header">Use the provided login or login with your Google account.</h6>

          <form onSubmit={handleLogin}>

            <input className="form-fields" name="email" type="email" placeholder="Email Address" />

            <input className="form-fields" name="password" type="password" placeholder="Password" />

            <Button type="submit" color="info" className="login-btn">Log in</Button>
          </form>


            <GoogleSignIn />


          <a className="btn register" href="/register" role="button">Register Email</a>

          <h6 className="login-header">Don't have an account? Register your personal email here!</h6>


        </Col>

      </Row>
      <Col md={6} className="login-right"></Col>
    </div>
  );
};

export default withRouter(Login);
