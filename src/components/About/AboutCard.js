import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">MOHIT VATS </span>
            from <span className="purple">HARYANA , India.</span>
            <br />I have completed my BE in Computer Science and Engineering from M S Ramaiah Institute of Technology , Bangalore.
            <br />
            <br />I have done internship from a startup called Bionaltek Enterprise private limited,where I helped an e-commerce android application for the company using flutter and firebase,
             I am really passionate about developing real world project and I am also very adaptive with latest Tech stacks.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books [Currently  Reading : Corporate Chanakya by Radhakrishna pillai ]
            </li>
            <li className="about-activity">
              <ImPointRight /> movies and web series
            </li>
            <li className="about-activity">
              <ImPointRight /> Sudden Travelling Plans
            </li>
          </ul>

         
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
