import React, { Component } from 'react';
import { Redirect } from "react-router";
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import firebase from "../../firebaseConfig";

class SideNav extends Component {
  state = {
    isSignedIn: true
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: user })
    })
  }

  render() {
    return (
      <div className="side-nav">
        <Nav vertical>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>

          {this.state.isSignedIn ? (
            <div>
              <Button onClick={() => firebase.auth().signOut()}>Sign-out</Button>
            </div>
          ) : (
              <Redirect to="/" />
            )}

        </Nav>
      </div>

    );
  }
}

export default SideNav;