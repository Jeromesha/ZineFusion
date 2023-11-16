import React from 'react'
import { Row, Col, Button, Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { FiFacebook } from "react-icons/fi";
import { GrMail } from "react-icons/gr";
import { RxTwitterLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
import "./Homepage.css";

function Footer() {
  return (
    <div>
       <div>
     <div className="Fin">
        <Row>
          <Col className="Foot1" md={3}>
            <h1 className="Foot2">
              <b>Company</b>
            </h1>
            <h2 className="Foot3">About Us &nbsp;</h2>
            <h2 className="Foot3">Careers &nbsp;</h2>
            <h2 className="Foot3">Awards &nbsp;</h2>
            <h2 className="Foot3">Investor Relations &nbsp;</h2>
          </Col>
          <Col className="Foot1" md={3}>
            <h1 className="Foot2">
              <b>Our Services</b>
            </h1>
            <h2 className="Foot3">Caravan Booking</h2>
            <h2 className="Foot3">Ticket Booking</h2>
          </Col>
          <Col className="Foot1" md={3}>
            <h1 className="Foot2">
              <b>Terms</b>
            </h1>
            <h2 className="Foot3">Terms of Service</h2>
            <h2 className="Foot3">Security Policy</h2>
            <h2 className="Foot3">Privacy Policy</h2>
            <h2 className="Foot3">Customize Cookies</h2>
          </Col>
          <Col className="Foot1" md={3}>
            <h1 className="Foot2">
              <b>Contact Us</b>
            </h1>
            <h2 className="Foot3">zinefusion@gmail.com &nbsp;</h2>
            <h2 className="Foot3">044-1234567-002 &nbsp;</h2>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Search for products"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button
                className="search_foot_clr"
                variant="outline-secondary"
                id="button-addon2"
              >
                Search
              </Button>
            </InputGroup>
          </Col>
        </Row>

        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col className="icon mt-3">
            <Row>
              <h6>Follow us on Social Media</h6>
              <Col>
                <a href="https://www.facebook.com" className="fb_icon">
                  <FiFacebook size={30} />
                </a>

                <a
                  href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=GTvVlcRwRdsCcmrgjQHtqHmFrttrjpfJGsBzrzrrNhFNZWhHsftWBxKlrTJSpfsfdrlTsGFdRNhQW"
                  className="mail_icon"
                >
                  <GrMail size={30} />
                </a>

                <a
                  href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
                  className="twitter_icon"
                >
                  <RxTwitterLogo size={30} />
                </a>

                <a href="https://www.instagram.com" className="insta_icon">
                  <FaInstagram size={30} />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div style={{ textAlign: "center" }}>
        {" "}
        <footer className="footer">
          <p>
            <b>&copy; 2023 Cinema. All rights reserved.</b>
          </p>
        </footer>
      </div>
     </div>
    </div>
  )
}

export default Footer
