import React, { useState } from 'react';
import {Container, Row, Tab, Nav} from "react-bootstrap";
import RFAPositionCard from "../RFAPositionCard";
import RFAPositionCard1 from "../RFAPositionCard1";
import RFAPositionCard2 from "../RFAPositionCard2";
import Placeholder from "../../media/placeholder.png"
// import {headerBlobYellow} from "../../media/HeaderBlobs/yellow.png";

export default function Internpos(props){
  const [key, setKey] = useState("one")
  const ActiveStyle = {
    color: "#000000",
    background: "#FFCC00",
    border: 0,
    borderRadius: "15px 15px 0 0"
  };
  const inActiveStyle = {
    color: "#000000",
    background: "#FA8D1F",
    border: 0,
    borderRadius: "15px 15px 0 0"
  };

    return (
      <div className = "InternPos">
        <Row className = "header-blobs">
          <Container className = "d-flex align-self-end">
            <Row className = "m-4 w-100 justify-content-center">
              <h1 className = "page-header">Volunteer to Teach Students STEM!</h1>
              <p className = "page-header-description">Volunteer to help with graphic design, curriculum development, and much much more!</p>
            </Row>
          </Container>
        </Row>
        <Container>
          <Tab.Container activeKey = {key} onSelect = {key => setKey(key)}>
              <Nav justify fill variant = "tabs">
                <Nav.Item>
                  <Nav.Link eventKey = "one" className = "pos" style = {key === "one" ? ActiveStyle : inActiveStyle}>Lead Instructor</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey = "two" className = "pos" style = {key === "two" ? ActiveStyle : inActiveStyle}>Teacher Assistant</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey = "one">
                  <RFAPositionCard posHeader = {"OVERVIEW"} posDescription = {
                    <div>
                      <p>
                      Being a business development intern means that you have the opportunity to try new things in a
                      welcoming environment. Robotics for All is divided into several areas including curriculum
                      development, publicity, recruitment, web design, event planning etc. You can choose to join
                      any of these groups and help them with their tasks. We also have new and upcoming projects
                      that you can join. Have an idea? You can also start your own project and gain leadership
                      experience.
                      </p>
                    </div>
                  }/>
                  <RFAPositionCard1 posHeader = {"TASKS"} posImage = {Placeholder} posDescription = {
                   <ul>
                    <li>Work on helping Robotics for All to grow and expand</li>
                    <li>Help with projects you are passionate about</li>
                    <li>Improve outreach to more schools and students</li>
                  </ul>
                  }/>
                  <RFAPositionCard2 posHeader = {"TIME COMMITMENT"} posImage = {Placeholder} posDescription = {
                    <ul>
                      <li>3-10 hours a week</li>
                      <li>Spend time on projects of your choice</li>
                      <li>Hours may differ depending on different projects</li>
                  </ul>
                  }/>
                  <RFAPositionCard1 posHeader = {"BENEFITS"} posImage = {Placeholder} posDescription = {
                    <ul>
                      <li>Earn community service hours for time spent volunteering with Robotics for All.</li>
                      <li>Leading a Robotics for All class will look good on any resume, whether applying for a future internship, job, or college</li>
                      <li>Potential future leadership positions within Robotics for All may be offered (ex. Board position, sub-director)</li>
                      <li>Learn valuable leadership and teamwork skills.</li>
                    </ul>
                  }/>
                  <RFAPositionCard2 posHeader = {"REQUIREMENTS"} posImage = {Placeholder} posDescription = {
                    <ul>
                      <li>8th grade in middle school or above (exceptions may be made to 6th-7th graders with a strong volunteering background.)</li>
                      <li>Strong communication skills and the ability to work effectively in a team</li>
                      <li>Quick response to questions and other communications</li>
                    </ul>
                  }/>
                  <RFAPositionCard1 posHeader = {"BENEFICIAL QUALIFICATIONS"} posImage = {Placeholder} posDescription = {
                    <ul>
                      <li>Experience with business development skills (graphic design, curriculum, operations etc)</li>
                    </ul>
                  }/>
                </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
          </Container>
        </div>
    );
}
