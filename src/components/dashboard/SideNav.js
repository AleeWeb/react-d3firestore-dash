import React, { Component } from 'react';
import { Redirect } from "react-router";
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import firebase from "../../firebaseConfig";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


let unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
     // User is signed in.
  }
});

class SideNav extends Component {
  state = {
    isSignedIn: true
  }
  
  componentDidMount = () => {
    unsubscribe = firebase.auth().onAuthStateChanged(user => {
      this.setState({
        isSignedIn: user
      })
    })
  }
  componentWillUnmount() {
    unsubscribe()
  }

  render() {
    return (
      <div className="side-nav">
        <Nav vertical>
          <NavItem>
            <NavLink href="#" className="nav-link"><FontAwesomeIcon icon="home" /> Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className="nav-link"><FontAwesomeIcon icon="file-invoice-dollar" /> Reports</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className="nav-link"><FontAwesomeIcon icon="users" /> Users</NavLink>
          </NavItem>
          

          {this.state.isSignedIn ? (
            <div>
              <Button onClick={() => firebase.auth().signOut()} color="info">Sign-out</Button>
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