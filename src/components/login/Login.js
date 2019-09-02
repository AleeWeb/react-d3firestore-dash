import React, { useCallback, useContext } from "react";
import { Col, Row, Button } from 'reactstrap';
import { withRouter, Redirect, Link } from 'react-router-dom';
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
         
            <h4 className="login-header">Welcome! Log in below.</h4>

            <form onSubmit={handleLogin}>

                <input name="email" type="email" placeholder="Email Address" className="form-fields" />
          
                <input name="password" type="password" placeholder="Password" className="form-fields" />
              
              <Button type="submit" color="info" className="login-btn">Log in</Button>
            </form>

            <h6 className="login-header">Or login with Google account or your own email.</h6>

<div className="firebase-btns">
            <GoogleSignIn />
            </div>

            <p>Don't have an account? Sign Up  <Link to="/register">here</Link> please!</p>
    
        </Col>
    
        </Row>
      <Col md={6} className="login-right"></Col>
    </div>
  );
};

export default withRouter(Login);
