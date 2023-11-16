import React from "react";
import Header from "./Header";
import { Row, Col, Container, Button, Card } from "react-bootstrap";
import { GiFilmProjector, GiCaravan } from "react-icons/gi";
import { PiFilmReelFill, PiFilmSlateFill } from "react-icons/pi";
import { FaBoxOpen } from "react-icons/fa";
import { IoTicketOutline } from "react-icons/io5";
import { TbBrandBooking } from "react-icons/tb";
import {FcServices} from "react-icons/fc";
import { Link } from 'react-router-dom';  
import Footer from "./Footer";

const cardabout = [
  {
    title1: <GiCaravan size={40} />,
    title2: <TbBrandBooking size={40} />,
    subtitle: 'Caravan Booking',
    content: 'Click me',
    link: '/services/caravanbooking', // Replace with the actual route path
  },
  {
    title1: <FcServices size={40} />,
    // title2:<TbBrandBooking size={40} />,
    subtitle: 'Booking Services ',
    // content: "Click me",
  },
  {
    title1: <IoTicketOutline size={40} />,
    title2: <TbBrandBooking size={40} />,
    subtitle: 'Ticket Booking',
    content: 'Click me',
    link: '/services/ticketbooking', // Replace with the actual route path
  },
];

function Service() {

  return (
    <div>
      {/* Header */}
      <Header/>
      <div className="about">
        <Container>
          <h1 style={{ paddingTop: "3%" }}>Our Services</h1>
          <div>
            <Row>
              <Col>
                <a
                  href="/"
                  style={{
                    color: "#4e4e85",
                    display: "flex",
                    justifyContent: "end",
                    paddingBottom: "3%"
                  }}
                >
                 <h5>🏘 Home</h5>
                </a>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div style={{ paddingTop: "5%", paddingBottom: "5%", display: "flex" }}>
        <Container>
          <Row>
            {cardabout.map((card, index) => (
              <Col
                md={4}
                key={index}
                className="d-flex align-items-stretch"
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <Card
                  style={{
                    width: "15rem",
                    backgroundColor: "#28283b",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  <Card.Body>
                    <Card.Title style={{ paddingBottom: "5%" }}>
                      {card.title1}{card.title2}
                      
                    </Card.Title>
                    <Card.Subtitle
                      className="mb-2"
                      style={{ fontSize: "xx-large" }}
                    >
                      {card.subtitle}
                    </Card.Subtitle>
                    {card.content && (
                    <Link to={card.link}>
                      {/* Use Link to wrap the button */}
                      <Button variant="secondary">{card.content}</Button>
                    </Link>
                  )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div
        className="ourservices"
        style={{ paddingTop: "3%", paddingBottom: "5%" }}
      >
        <Container>
          <Row style={{ paddingBottom: "5%" }}>
            <h4
              style={{
                color: "rgb(78, 78, 133)",
                textAlign: "center",
                paddingBottom: "5%",
                textDecoration: "underline",
              }}
            >
              Caravan Booking
            </h4>
            <Col md={7}>
              <Row style={{ backgroundColor: "" }}>
                <Col md={4}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="https://img.freepik.com/free-photo/white-bus-with-word-coach-side_1340-32421.jpg"
                    alt=""
                  />
                </Col>
                <Col md={4} style={{ textAlign: "center" }}>
                  <PiFilmReelFill size={30} />
                  <h5>
                    "Rolling Dreams, Unveiling Adventures: Caravan Cinema!"
                  </h5>
                </Col>
                <Col md={4}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="https://img.freepik.com/premium-photo/broadcasting-van-with-dramatic-stormy-sky-background_124507-123360.jpg"
                    alt=""
                  />
                </Col>
              </Row>
              <Row style={{ backgroundColor: "" }}>
                <Col md={4} style={{ textAlign: "center" }}>
                  <FaBoxOpen size={30} />
                  <h5>"Bringing Blockbusters to Your Doorstep!"</h5>
                </Col>
                <Col md={4}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="https://img.freepik.com/free-photo/antique-camera-lens-wooden-table-indoors-generated-by-ai_188544-32919.jpg"
                    alt=""
                  />
                </Col>
                <Col md={4} style={{ textAlign: "center" }}>
                  <GiCaravan size={30} />
                  <h5>"Wheels of Entertainment: Camera, Adventure!"</h5>
                </Col>
              </Row>
              <Row style={{ backgroundColor: "" }}>
                <Col md={4}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="https://img.freepik.com/premium-photo/camper-van-parked-picturesque-beach-with-stunning-view-sea-ai-generated_899027-8758.jpg"
                    alt=""
                  />
                </Col>
                <Col md={4} style={{ textAlign: "center" }}>
                  <PiFilmSlateFill size={30} />

                  <h5>"Where Every Frame Comes to Life!"</h5>
                  <GiFilmProjector size={30} />
                </Col>
                <Col md={4}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="https://img.freepik.com/free-photo/city-trucks-rush-by-delivering-urgent-cargo-generated-by-ai_188544-29950.jpg"
                    alt=""
                  />
                </Col>
              </Row>
            </Col>
            <Col md={5} style={{ paddingTop: "2%" }}>
              <h5>
                <b>A Destination</b>
              </h5>
              <h2 style={{ color: "#4e4e85" }}>
                <b>The Ultimate Movie Environment</b>
              </h2>
              <p style={{ paddingTop: "3%" }}>
                <b>
                  It is a long established fact that a reader will distracted by
                  the readable content of a page hen looking at its layout. The
                  point of using our website zinefusion is that it has a
                  more-or-less normal distribution of letters, as opposed to
                  using.
                </b>
              </p>
              <p style={{ paddingTop: "3%" }}>
                <b>
                  It is a long established fact that a reader will distracted by
                  the readable content of a page hen looking at its layout. The
                  point of usin zinefusion{" "}
                </b>
              </p>
              <div className="button-container">
                <Button className="button" variant="dark">
                  Learn More
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
            <h4
              style={{
                color: "rgb(78, 78, 133)",
                textAlign: "center",
                paddingBottom: "5%",
                textDecoration: "underline",
              }}
            >
              Ticket Booking
            </h4>
            <Col md={5} style={{ paddingTop: "3%" }}>
              <h5>
                <b>Buy Your Pass</b>
              </h5>
              <h2 style={{ color: "#4e4e85" }}>
                <b>Get Better Experience </b>
              </h2>
              <p style={{ paddingTop: "3%" }}>
                <b>
                  Booking tickets in advance often comes with cost advantages.
                  Many providers offer early-bird discounts or special offers
                  for those who plan ahead. This not only helps travelers or
                  attendees save money but also allows them to allocate their
                  budgets more effectively.
                </b>
              </p>
              <p style={{ paddingTop: "3%", paddingBottom: "5%" }}>
                <b>
                  This includes accommodations, transportation, and creating
                  itineraries that maximize their time and enjoyment.
                </b>
              </p>
              <div className="button-container">
                <Button className="button" variant="dark" >
                  Learn More
                </Button>
              </div>
            </Col>
            <Col md={7}>
              <Row style={{ backgroundColor: "" }}>
                <Col md={4} style={{ textAlign: "center" }}>
                  <FaBoxOpen size={30} />
                  <h5>
                    "Opening Doors to Dreams: Where Films Begin with Your
                    Booking."
                  </h5>
                </Col>
                <Col md={4}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="https://img.freepik.com/free-vector/buying-cinema-tickets-online-isometric-composition-with-holding-smartphone-hand-popcorn-movie-film-bobbins_1284-55352.jpg?size=626&ext=jpg&ga=GA1.2.786155833.1675059853&semt=ais"
                    alt=""
                  />
                </Col>
                <Col md={4} style={{ textAlign: "center" }}>
                  <GiCaravan size={30} />
                  <h5>
                    "Elevate Your Movie Experience: Where Tickets Come to Life!"
                  </h5>
                </Col>
              </Row>
              <Row style={{ backgroundColor: "" }}>
                <Col md={4}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="https://img.freepik.com/premium-photo/concept-watching-movies-online-home-during-epidemic-surrounded-by-movie-equipment-movie-tickets-film-reels-movie-cameras-popcorn-drinks-with-red-leather-chairs-3d-rendering_156429-3743.jpg?size=626&ext=jpg&ga=GA1.2.786155833.1675059853&semt=ais"
                    alt=""
                  />
                </Col>
                <Col md={4} style={{ textAlign: "center" }}>
                  <PiFilmReelFill size={30} />
                  <h5>"Empowering Choice, One Ticket at a Time."</h5>
                </Col>
                <Col md={4}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="https://img.freepik.com/free-photo/cinema-popcorn-box-with-soft-drink_23-2148115272.jpg?size=626&ext=jpg&ga=GA1.2.786155833.1675059853&semt=ais"
                    alt=""
                  />
                </Col>
              </Row>
              <Row style={{ backgroundColor: "" }}>
                <Col md={4} style={{ textAlign: "center" }}>
                  <FaBoxOpen size={30} />
                  <h5>
                    "Seize the Aisle: Booking Memories, One Film at a Time."
                  </h5>
                </Col>
                <Col md={4}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="https://img.freepik.com/premium-psd/3d-render-cinema-ticket-popup-from-smartphone-with-booking-tickets-online_252008-535.jpg?size=626&ext=jpg&ga=GA1.2.786155833.1675059853&semt=ais"
                    alt=""
                  />
                </Col>
                <Col md={4} style={{ textAlign: "center" }}>
                  <GiCaravan size={30} />
                  <h5>"Navigate Entertainment :Your Ticket, Your Tale."</h5>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default Service;
