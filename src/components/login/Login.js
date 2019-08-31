import React, { useCallback, useContext } from "react";
import { Row, Button } from 'reactstrap';
import app from "../../firebaseConfig";
import { withRouter, Redirect, Link } from 'react-router-dom';
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

      <Row>
   
       
         
            <h3>Welcome! Log in below.</h3>
            <form onSubmit={handleLogin}>

                <input name="email" type="email" placeholder="Email Address" className="form-fields" />
          
                <input name="password" type="password" placeholder="Password" className="form-fields" />
              
              <Button type="submit" color="info" className="login-btn">Log in</Button>
            </form>

            <h6 className="spacer">Or Login with Google</h6>

            <GoogleSignIn />

        </Row>
    
    </div>
  );
};

export default withRouter(Login);
