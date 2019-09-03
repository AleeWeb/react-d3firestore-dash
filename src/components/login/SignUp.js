import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from '../../firebaseConfig';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div className="bg-signup">
    <Container className="signup-wrap d-flex flex-row justify-content-center align-items-center">
      <Row className="text-center">
      <Col md={12}>
      <h3 className="login-header">Register</h3>
      <form onSubmit={handleSignUp}>

        <Row>
        <label>
          Email
          <input className="form-fields" name="email" type="email" placeholder="Email" />
        </label>
        </Row>

        <Row>
        <label>
          Password
          <input className="form-fields" name="password" type="password" placeholder="Password" />
        </label>
        </Row>

        <Row>
        <button type="submit" color="primary" >Sign Up</button>
        </Row>
        
      </form>
      </Col>
      </Row>

      <Row>
      <p className="homelink">Go back to <Link to="/" className="form-link">home</Link>!</p>
      </Row>
    </Container>
    </div>
  );
};

export default withRouter(SignUp);
