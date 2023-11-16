import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function CaravanBooking() {
  return (
    <div>
      <div className="about">
        <Container>
          <h1 style={{ paddingTop: "3%" }}>Caravan Booking</h1>
          <div>
            <Row>
              <Col md={6}></Col>
              <Col md={6}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    paddingBottom: "3%",
                  }}
                >
                  <span style={{ color: "white", marginRight: "10px" }}>
                    {">>"}
                  </span>
                  <a
                    href="/services"
                    style={{
                      color: "white",
                      marginRight: "10px", // Add some spacing between the links
                    }}
                  >
                    Service
                  </a>
                  <span style={{ color: "white" }}>{">>"}</span>
                  <a
                    href="/"
                    style={{
                      color: "white",
                      marginLeft: "10px", // Add some spacing between the links
                    }}
                  >
                    Home
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default CaravanBooking;
