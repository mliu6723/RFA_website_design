import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap';
import RFANavbar from "./components/RFANavbar";
// import RFACard from "./components/RFACard";
import RFAAffOrgs from "./components/About/RFAAffOrgs";
import RFASchools from "./components/Schools/schools";
import RFAIndividu from "./components/Individual/individual";
export default class App extends React.Component{

  render() {
    return (
      <Container className = "border" fluid>
          <RFASchools/>
      </Container>
    );
  }
}
