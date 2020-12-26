import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Image, Col, Card, CardDeck} from "react-bootstrap";
import RFAAffOrgsCard from "../RFAAffOrgsCard";

export default function RFAAffOrgs(props){
    return (
        <Row>
          <Row className = "header-blobs">
            <Container className = "d-flex align-self-end">
              <Row className = "m-5 w-100 justify-content-center">
                <h1 style = {{color: "#FFCC00"}} className = "page-header header-size text-center">Check out our Affiliate Organizations!</h1>
                <p className = "page-header-description header-description-size text-center">Learn more about our affiliate organizations started from members of Robotics for All!</p>
              </Row>
            </Container>
          </Row>
          <Container>
            <RFAAffOrgsCard bgColor = {""} color = {"#3399ff"} affOrgName = {"Tutoring For All"} affOrgsDescription = {"Tutoring for All is a branch of the non-profit organization Robotics for All. Our goal is to provide free, quality tutoring services to primarily low income and disadvantaged students."}/>
            <RFAAffOrgsCard color = {"#33cc66"} affOrgName = {"Mentoring For All"} affOrgsDescription = {"Mentoring for All is a branch of the non-profit organization Robotics for All with the goal of providing guidance on the path towards future success for underserved high school students."}/>
            <RFAAffOrgsCard color = {"#fa8d1f"} affOrgName = {"Crafts For Charity"} affOrgsDescription = {"Crafts for Charity is a student-led nonprofit providing classes and opportunities for everyone to give back to their communities through crafting! We help donate handmade goods to charities for causes like homelessness."}/>
          </Container>
        </Row>
    );
}
