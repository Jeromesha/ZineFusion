import {React,useState} from 'react'
import { GiFilmProjector } from "react-icons/gi";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import {Row,Col,Button,Form} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";
function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
      }
    
      function closeMenu() {
        setIsMenuOpen(false);
      }
    
      const [isPopupOpen, setIsPopupOpen] = useState(false);
    
      const openPopup = () => {
        setIsPopupOpen(true);
      };
    
      const closePopup = () => {
        setIsPopupOpen(false);
      };
      const navigate = useNavigate();
  return (
    <div>
         <div className="navbackground">
        <nav className="navbar">
          <div className="navbar-column logo-column">
            <div className="logo" style={{ paddingLeft: "2%" }}>
              <GiFilmProjector size={40} />
            </div>
            <div className="product-name">ZineFusion</div>
          </div>

          <div className="menu-container">
            <div
              className={`menu-bar ${isMenuOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              <div
                className="bar"
                style={{
                  backgroundColor: "white",
                  borderColor: "transparent",
                  boxShadow: "none",
                }}
              ></div>
              <div
                className="bar"
                style={{
                  backgroundColor: "white",
                  borderColor: "transparent",
                  boxShadow: "none",
                }}
              ></div>
              <div
                className="bar"
                style={{
                  backgroundColor: "white",
                  borderColor: "transparent",
                  boxShadow: "none",
                }}
              ></div>
            </div>

            {isMenuOpen && (
              <div className="full-page-menu">
                <div>
                  <Row>
                    <Col md={6}>
                      <h4>
                        {" "}
                        <GiFilmProjector size={40} />
                        ZineFusion
                      </h4>
                      <h4>Menu</h4>
                    </Col>
                    <Col
                      md={6}
                      style={{ textAlign: "end", paddingBottom: "10%" }}
                    >
                      <Button
                        variant="danger"
                        className="close-button"
                        onClick={closeMenu}
                      >
                        <MdClose size={30} />
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={3}>
                      <h4>
                        <a
                          href="/movies"
                          style={{ color: "red", textDecoration: "underline" }}
                        >
                          Movies
                        </a>
                      </h4>
                      <h6 className="sub-fields">Top Rated Movies</h6>
                      <h6 className="sub-fields">Now in theatres</h6>
                      <h6 className="sub-fields">Upcoming Movies </h6>
                      <h6 className="sub-fields">ShowTimes</h6>
                    </Col>
                    <Col md={3}>
                      <h4>
                        <a
                          href="/shortfilms"
                          style={{ color: "red", textDecoration: "underline" }}
                        >
                          Short Films
                        </a>
                      </h4>
                      <h6 className="sub-fields">Trending Now</h6>
                      <h6 className="sub-fields">Award wining shortfilms</h6>
                      <h6 className="sub-fields">Best find of the year</h6>
                    </Col>
                    <Col md={3}>
                      <h4>
                        <a
                          href="/webseries"
                          style={{ color: "red", textDecoration: "underline" }}
                        >
                          Web Series
                        </a>
                      </h4>
                      <h6 className="sub-fields">Watch by Genres</h6>
                      <h6 className="sub-fields">Top Rated</h6>
                      <h6 className="sub-fields">Releasing Soon</h6>
                    </Col>
                    <Col md={3}>
                      <h4>
                        <a
                          href="/tvshows"
                          style={{ color: "red", textDecoration: "underline" }}
                        >
                          TV Shows
                        </a>
                      </h4>
                      <h6 className="sub-fields">Top Ratings</h6>
                      <h6 className="sub-fields">Trending Tv shows</h6>
                      <h6 className="sub-fields">Fiction</h6>
                      <h6 className="sub-fields">Non-Fiction</h6>
                    </Col>
                  </Row>
                  {/* <Row>
                    <Col md={12} style={{display:"flex", justifyContent:"center",flexDirection:"column", textAlign:"center"}}>
                      <h4 style={{ color: "red", textDecoration: "underline" }}>
                        Celebrity
                      </h4>
                      <h6 className="sub-fields">Popular Celebrity</h6>
                      <h6 className="sub-fields">Latest News</h6>
                      <h6 className="sub-fields">Celebrity Birthday </h6>
                      
                    </Col>
                   
                  </Row> */}
                  <Row>
                    <Col md={3}>
                      <h4>
                        <a
                          href="/albums"
                          style={{ color: "red", textDecoration: "underline" }}
                        >
                          Albums
                        </a>
                      </h4>
                  
                      <h6 className="sub-fields">Video Albums</h6>
                      <h6 className="sub-fields">Trending Now</h6>
                      <h6 className="sub-fields">Top Rated</h6>
                    </Col>
                    <Col md={3}>
                      <h4>
                        <a
                          href="/events"
                          style={{ color: "red", textDecoration: "underline" }}
                        >
                          Events
                        </a>
                      </h4>
                      <h6 className="sub-fields">Award Shows</h6>
                      <h6 className="sub-fields">Music Concert</h6>
                      <h6 className="sub-fields">Audio Launch</h6>
                      <h6 className="sub-fields">Pre-Release Events</h6>
                    </Col>
                    <Col md={3}>
                      <h5>
                        <a
                          href="/watchwithus"
                          style={{ color: "red", textDecoration: "underline" }}
                        >
                          Watch with us
                        </a>
                      </h5>
                      <h6 className="sub-fields">Netflix</h6>
                      <h6 className="sub-fields">Amazon</h6>
                      <h6 className="sub-fields">Hotstar</h6>
                      <h6 className="sub-fields">Latest Trailers</h6>
                    </Col>
                    <Col md={3}>
                      <h5>
                        <a
                          href="/caravanbooking"
                          style={{ color: "red", textDecoration: "underline" }}
                        >
                          Caravan Booking
                        </a>
                      </h5>
                      <h6 className="sub-fields">Luxury</h6>
                      <h6 className="sub-fields">Affordable</h6>
                      <h6 className="sub-fields">Standard</h6>
                    </Col>
                  </Row>
                </div>
              </div>
            )}
          </div>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="secondary">Search</Button>
          </Form>

          <div className="navbar-column menu-column">
            {/* Menu items */}
            <ul style={{ paddingLeft: "5%" }}>
              <li>
                <Link to="/aboutus" className="text_dec">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text_dec">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/services" className="text_dec">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text_dec">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Button variant="secondary" onClick={openPopup}>
              Login/Signup
            </Button>
            {isPopupOpen && (
              <div className="popup">
                <Button variant="secondary" onClick={closePopup}>
                  Close
                </Button>
                <Button variant="secondary" onClick={() => navigate("/login")}>
                  Login
                </Button>
                <Button variant="secondary" onClick={() => navigate("/singup")}>
                  Signup
                </Button>
              </div>
            )}
          </div>
        </nav>
      </div>
      
    </div>
  )
}

export default Header
