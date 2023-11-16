import React, { useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Header from "./Header";
import {
  MdWifiCalling3,
  MdLocationPin,
  MdOutlineAccessTimeFilled,
} from "react-icons/md";

import { FiFacebook } from "react-icons/fi";
import { GrMail } from "react-icons/gr";
import { RxTwitterLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
import Footer from "./Footer";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to a server
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <div>
      {/* Header */}
      <Header/>
      <div className="about">
        <Container>
          <h1 style={{ paddingTop: "3%" }}>Contact US</h1>
          <div>
            <Row>
              <Col>
                <a
                  href="/"
                  style={{
                    color: "#4e4e85",
                    display: "flex",
                    justifyContent: "end",
                    paddingBottom: "3%",
                  }}
                >
                  Home
                </a>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div style={{ textAlign: "center", paddingTop: "10%" }}>
        <Row>
          <Col md={4}>
            <h1 style={{ color: "#4e4e85" }}>
              <MdWifiCalling3 size={50} />
            </h1>
            <h4>Call us</h4>
            <p>
              <b>
                144-123-1234
                <br />
                123-098-0009
              </b>
            </p>
          </Col>

          <Col md={4} className="location-column">
            <h1 style={{ color: "#4e4e85" }}>
              <MdLocationPin size={50} />
            </h1>
            <h4>Location</h4>
            <p>
              <b>
                Bengaluru
                <br />
                Karanataka - 560 001
              </b>
            </p>
          </Col>

          <Col md={4} className="e-column">
            <h1 style={{ color: "#4e4e85" }}>
              <MdOutlineAccessTimeFilled size={50} />
            </h1>
            <h4>E-Address</h4>
            <p>
              <b>
                trimatis@gmail.com
                <br />
                trimatis@outlook.in
              </b>
            </p>
          </Col>
        </Row>
      </div>
      <div style={{ paddingTop: "8%" }}>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <h5 style={{ color: "#4e4e85" }}>For enquiry</h5>
            <h1>
              <b>Send us a message</b>
            </h1>
          </Col>
        </Row>
        <div className="enquiry-form-container">
          <form className="enquiry-form" onSubmit={handleSubmit}>
            <Row>
              <Col md={4}>
                <div className="form-field">
                  <input
                    className="wh_form"
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </Col>
              <Col md={4}>
                <div className="form-field">
                  <input
                    className="wh_form"
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </Col>
              <Col md={4}>
                <div className="form-field">
                  <input
                    className="wh_form"
                    type="tel"
                    id="phoneNumber"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </Col>
            </Row>

            <div className="form-field">
              <textarea
                className="msg_wh"
                id="message"
                placeholder="Write your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <Button type="submit" className="submit-button">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div style={{ paddingTop: "5%" }}>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <h1>
              <b>Follow us on</b>
            </h1>
            <h5 style={{ color: "#4e4e85" }}>Social Media</h5>
          </Col>
        </Row>
            <Row style={{ display: "flex", justifyContent: "center" }}>
              <Col className="icon mt-3">
                <Row>
                  <Col>
                    <a href="https://www.facebook.com" style={{color:"#4e4e85"}}>
                      <FiFacebook size={30} />
                    </a>
                    &nbsp;
                    <a href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=GTvVlcRwRdsCcmrgjQHtqHmFrttrjpfJGsBzrzrrNhFNZWhHsftWBxKlrTJSpfsfdrlTsGFdRNhQW" style={{color:"red"}}>
                      <GrMail size={30} />
                    </a>
                    &nbsp;
                    <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" >
                      <RxTwitterLogo size={30} />
                    </a>
                    &nbsp;
                    <a href="https://www.instagram.com" style={{color:"rgb(229, 104, 156)"}}>
                      <FaInstagram size={30} />
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>      
      </div>
      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default Contact;
