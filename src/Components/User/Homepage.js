import React from "react";
import "./Homepage.css";
import Header from './Header';
import { Row, Col, Card, Button} from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";


function Homepage() {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  var settings1 = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  const Kollywood = [
    {
      img: "https://imgnew.outlookindia.com/public/uploads/articles/2021/12/12/Rajinikanth_adobespark.jpg",
      text: "RajiniKanth",
    },
    {
      img: "https://www.behindwoods.com/tamil-actor/kamal-haasan/kamal-haasan-stills-photos-pictures-04.jpg",
      text: "Kamal Haasan",
    },
    {
      img: "https://i.pinimg.com/236x/81/3e/87/813e87d14052b53db98149e40b38cf2d.jpg",
      text: "Joseph Vijay",
    },
    {
      img: "https://gumlet.assettype.com/freepressjournal/2023-07/2dd67577-9d7d-4bbb-ad08-d17099aebe7f/327299603_846910539722694_6554671378060695164_n.jpg",
      text: "Ajith Kumar",
    },
  ];
  const SandalWood = [
    {
      img: "https://s3images.zee5.com/wp-content/uploads/sites/7/2019/03/A-Still-Of-Karunadada-Chakravarthy-Shivarajkumar.jpg",
      text: "Shiva Rajkumar",
    },
    {
      img: "https://s3images.zee5.com/wp-content/uploads/sites/7/2021/11/Picture1.png",
      text: "Puneeth Rajkumar",
    },
    {
      img: "https://cdn.siasat.com/wp-content/uploads/2022/06/New-Project-49.jpg",
      text: "Yash",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRb_D7FqcW0rI-T05gYEbZKsKBVp01EXswi22GhwGu9rtbW8V4ob5wJIQRfiy-VF2ULS4&usqp=CAU",
      text: "Sudeep",
    },
  ];
  const Mollywood = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ84yHAMPgZuz5mYQueUpLUFQ0CRZL0HscpigEIk6cKk7cf_7TVu-oOiqQrCSR2FI2XFsM&usqp=CAU",
      text: "Mohanlal",
    },
    {
      img: "https://24newsdaily.com/wp-content/uploads/2021/09/mamoo.jpeg",
      text: "Mammootty",
    },
    {
      img: "https://d1vzdswwroofzl.cloudfront.net/wp-content/uploads/2023/07/dulquer-salmaan-1-1.png",
      text: "Dulquer Salman",
    },
    {
      img: "https://static.toiimg.com/thumb/msid-100157858,width-1280,resizemode-4/100157858.jpg",
      text: "Prithviraj Sukumaran",
    },
  ];
  const Tollywood = [
    {
      img: "https://th-i.thgim.com/public/incoming/f6w1rt/article66161716.ece/alternates/FREE_1200/DSC_2495.JPG",
      text: "Chiranjeevi",
    },
    {
      img: "https://wallpapers.com/images/featured/pawan-kalyan-0mdf19707eujkj06.jpg",
      text: "Pawan Kalyan",
    },
    {
      img: "https://feeds.abplive.com/onecms/images/uploaded-images/2022/08/29/5c95ca1edfb33e987bb732fd685e38221661736518001145_original.jpg",
      text: "Nagarjuna",
    },
    {
      img: "https://filmfare.wwmindia.com/content/2020/aug/maheshbabu21596961195.jpg",
      text: "Mahesh Babu",
    },
  ];

  const popularSearches = [
    "Leo",
    "Jailer Showcase",
    "Openheimer",
    "Por Thozhil",
    "Maamanan",
    "Maaveeran",
    "Varisu OST",
    "Hatya",
    "Dude",
    "Padmini",
    "Ghost",
  ];
  const playing = [
    {
      img: "https://www.cinefry.co.in/wp-content/uploads/2023/08/Lucky-Man.jpg",
      ratings: "⭐9.3/10",
      movie: "Lucky Man",
      link: "1",
    },
    {
      img: "https://www.hindustantimes.com/ht-img/img/2023/08/14/1600x900/jailer_box_office_record_1691989814157_1691989814408.jpg",
      ratings: "⭐7.5/10",
      movie: "Jailer",
      link: "2",
    },
    {
      img: "https://assetscdn1.paytm.com/images/cinema/Partner-min-90ec3d90-1efb-11ee-bdaa-433cb4a32ad0.jpg",
      ratings: "⭐6.4/10",
      movie: "Partner",
      link: "3",
    },
    {
      img: "https://thesouthfirst.com/wp-content/uploads/2023/08/A-poster-of-the-film-Adiyae.jpg",
      ratings: "⭐9.3/10",
      movie: "Adiyae",
      link: "4",
    },
    {
      img: "https://images.cinemaexpress.com/uploads/user/imagelibrary/2023/9/1/original/KICK.jpg",
      ratings: "⭐6.8/10",
      movie: "Kick",
      link: "5",
    },
    {
      img: "https://i.ytimg.com/vi/4L1W7hRTr_A/maxresdefault.jpg",
      ratings: "⭐8.9/10",
      movie: "Kushi",
      link: "6",
    },
  ];

  const upcomingMovies = [
    {
      title: "Leo",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BOGQ2OTNmODQtNDRkOC00ODRmLTkwOWQtMmU1NjdmODQ0NTA3XkEyXkFqcGdeQXVyMTMxODA4Njgx._V1_FMjpg_UX1000_.jpg",
      description: "2023 ‧ Gangster/Adventure",
    },
    {
      title: "Mark Antony",
      imageUrl:
        "https://www.thetelugufilmnagar.com/wp-content/uploads/2023/04/Mark-Antony.webp",
      description: "2023 ‧ Fantasy/Adventure ‧ 2h 2m",
    },
    {
      title: "Jawan",
      imageUrl:
        "https://st1.bollywoodlife.com/wp-content/uploads/2023/07/image-1200x900-21.png?impolicy=Medium_Widthonly&w=412&h=290",
      description: "2023 ‧ Action/Drama ‧ 2h 45m",
    },
    {
      title: "Salaar: Part 1 – Ceasefire",
      imageUrl: "https://i.ytimg.com/vi/FMW0SqD4hnE/maxresdefault.jpg",
      description: "2023 ‧ Drama/Thriller",
    },
    {
      title: "Chandramukhi 2",
      imageUrl: "https://i.ytimg.com/vi/qE2i5O6mFBE/maxresdefault.jpg",
      description: "2023 ‧ Drama/Horror",
    },

    {
      title: "Leo",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BOGQ2OTNmODQtNDRkOC00ODRmLTkwOWQtMmU1NjdmODQ0NTA3XkEyXkFqcGdeQXVyMTMxODA4Njgx._V1_FMjpg_UX1000_.jpg",
      description: "2023 ‧ Gangster/Adventure",
    },
    {
      title: "Mark Antony",
      imageUrl:
        "https://www.thetelugufilmnagar.com/wp-content/uploads/2023/04/Mark-Antony.webp",
      description: "2023 ‧ Fantasy/Adventure ‧ 2h 2m",
    },
    {
      title: "Jawan",
      imageUrl:
        "https://st1.bollywoodlife.com/wp-content/uploads/2023/07/image-1200x900-21.png?impolicy=Medium_Widthonly&w=412&h=290",
      description: "2023 ‧ Action/Drama ‧ 2h 45m",
    },
    {
      title: "Salaar: Part 1 – Ceasefire",
      imageUrl: "https://i.ytimg.com/vi/FMW0SqD4hnE/maxresdefault.jpg",
      description: "2023 ‧ Drama/Thriller",
    },
    {
      title: "Chandramukhi 2",
      imageUrl: "https://i.ytimg.com/vi/qE2i5O6mFBE/maxresdefault.jpg",
      description: "2023 ‧ Drama/Horror",
    },
  ];

  // const navigate = useNavigate();

  return (
    <div>
      {/* Header */}
     <Header/>
      {/* Carousel */}
      <div className="carousel">
        <Row>
          <Col md={12}>
            <Carousel>
              <Carousel.Item>
                <img
                  style={{ width: "100%", height: "80vh", opacity: "100%" }}
                  src="https://img.freepik.com/free-vector/cinema-movie-film-festival-background_1017-23458.jpg?size=626&ext=jpg&ga=GA1.2.786155833.1675059853&semt=sph" // Replace with your image source
                  alt="Slide 1"
                />
                <Carousel.Caption>
                
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ width: "100%", height: "80vh", opacity: "100%" }}
                  src="https://img.freepik.com/free-photo/cinema-still-life_23-2148017291.jpg?size=626&ext=jpg&ga=GA1.2.786155833.1675059853&semt=sph" // Replace with your image source
                  alt="Slide 2"
                />
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ width: "100%", height: "80vh", opacity: "100%" }}
                  src="https://img.freepik.com/free-vector/cinema-room-background_1017-8728.jpg?size=626&ext=jpg&ga=GA1.2.786155833.1675059853&semt=sph" // Replace with your image source
                  alt="Slide 3"
                />
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{ width: "100%", height: "80vh", opacity: "100%" }}
                  src="https://img.freepik.com/free-vector/film-stripes-reels-realistic-composition-with-light-glows-golden-figurine-award-with-clapper-bobbin_1284-59002.jpg?size=626&ext=jpg&ga=GA1.2.786155833.1675059853&semt=sph" // Replace with your image source
                  alt="Slide 3"
                />
                <Carousel.Caption>
                  {/* <h3 style={{ fontFamily: "Times New Roman" }}>Appetite</h3>
                  <p style={{ fontFamily: "Times New Roman" }}>
                    Good Cooking Tempts The Appetite.
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </div>
      {/* popularsearch */}
      <div
        className="popularsearch"
        style={{ textAlign: "center", paddingTop: "5%", paddingBottom: "3%" }}
      >
        <Row style={{ paddingBottom: "5%" }}>
          <Col>
            <h4 style={{ paddingBottom: "2%", color: "rgb(78, 78, 133)" }}>
              Popular Searches
            </h4>
            {popularSearches.map((searchTerm, index) => (
              <Button
                key={index}
                variant="light"
                className="popularsearchbutton"
              >
                {searchTerm}
              </Button>
            ))}
          </Col>
        </Row>
      </div>
      {/* Top Actors */}
      <div
        className="Top_Actors"
        style={{ paddingLeft: "2%", paddingRight: "2%", paddingBottom: "5%" }}
      >
        <h3
          className="actorheadertag"
          style={{
            textAlign: "center",
            color: "rgb(78, 78, 133)",
            paddingBottom: "3%",
            textDecoration: "underline",
            textDecorationColor: "black",
          }}
        >
          Top Actors
        </h3>

        <Slider {...settings}>
          {/* Kollywood */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Card
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                display: "flex",
                justifyContent: "center",
                paddingLeft: "5%",
                paddingBottom: "5%",
              }}
            >
              <Row style={{ display: "flex", justifyContent: "center" }}>
                <div>
                  <Row>
                    <h5
                      style={{
                        
                        textAlign: "center",
                        paddingTop: "5%",
                      }}
                    >
                      Kollywood
                    </h5>
                  </Row>
                </div>
                {Kollywood.map((user) => (
                  <Col md={6}>
                    <img
                      className="slick_img_hov"
                      style={{
                        width: "90%",
                        height: "80%",
                        paddingTop: "5%",
                      }}
                      src={user.img}
                      alt=""
                    />
                    <p
                      style={{
                        
                        textAlign: "center",
                      }}
                    >
                      {user.text}
                    </p>
                  </Col>
                ))}
              </Row>
            </Card>
          </div>
          {/* SandalWood */}
          <div>
            <Card
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                display: "flex",
                justifyContent: "center",
                paddingLeft: "5%",
                paddingBottom: "5%",
              }}
            >
              <Row style={{ display: "flex", justifyContent: "center" }}>
                <div>
                  <Row>
                    <Col>
                      <h5
                        style={{
                          
                          textAlign: "center",
                          paddingTop: "5%",
                        }}
                      >
                        Sandalwood
                      </h5>
                    </Col>
                  </Row>
                </div>
                {SandalWood.map((user) => (
                  <Col md={6}>
                    <img
                      className="slick_img_hov"
                      style={{
                        width: "90%",
                        height: "80%",
                        paddingTop: "5%",
                      }}
                      src={user.img}
                      alt=""
                    />
                    <p
                      style={{
                        
                        textAlign: "center",
                      }}
                    >
                      {user.text}
                    </p>
                  </Col>
                ))}
              </Row>
            </Card>
          </div>
          {/* Mollywood */}
          <div>
            <Card
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                display: "flex",
                justifyContent: "center",
                paddingLeft: "5%",
                paddingBottom: "5%",
              }}
            >
              <Row style={{ display: "flex", justifyContent: "center" }}>
                <div>
                  <Row>
                    <Col>
                      <h5
                        style={{
                          
                          textAlign: "center",
                          paddingTop: "5%",
                        }}
                      >
                        Mollywood
                      </h5>
                    </Col>
                  </Row>
                </div>
                {Mollywood.map((user) => (
                  <Col md={6}>
                    <img
                      className="slick_img_hov"
                      style={{
                        width: "90%",
                        height: "80%",
                        paddingTop: "5%",
                      }}
                      src={user.img}
                      alt=""
                    />
                    <p
                      style={{
                        
                        textAlign: "center",
                      }}
                    >
                      {user.text}
                    </p>
                  </Col>
                ))}
              </Row>
            </Card>
          </div>
          {/* Tollywood */}
          <div>
            <Card
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                display: "flex",
                justifyContent: "center",
                paddingLeft: "5%",
                paddingBottom: "5%",
              }}
            >
              <Row style={{ display: "flex", justifyContent: "center" }}>
                <div>
                  <Row>
                    <Col>
                      <h5
                        style={{
                          
                          textAlign: "center",
                          paddingTop: "5%",
                        }}
                      >
                        Tollywood
                      </h5>
                    </Col>
                  </Row>
                </div>
                {Tollywood.map((user) => (
                  <Col md={6}>
                    <img
                      className="slick_img_hov"
                      style={{
                        width: "90%",
                        height: "80%",
                        paddingTop: "5%",
                      }}
                      src={user.img}
                      alt=""
                    />
                    <p
                      style={{
                        
                        textAlign: "center",
                      }}
                    >
                      {user.text}
                    </p>
                  </Col>
                ))}
              </Row>
            </Card>
          </div>
        </Slider>
      </div>
      {/* Now Playing in theatres */}
      <div>
        <h3
          className="actorheadertag"
          style={{
            padding: "2%",
            color: "rgb(78, 78, 133)",
            paddingBottom: "3%",
          }}
        >
          Now Playing
        </h3>
        <Slider {...settings1}>
          {playing.map((card, index) => (
            <div key={index} className="slider-item">
              <Card style={{ width: "18rem", padding: "10px" }}>
                <Card.Img
                  style={{ height: "200px", width: "100%" }}
                  src={card.img}
                  alt=""
                />
                <Card.Body>
                  <Card.Text>{card.ratings}</Card.Text>
                  <Card.Title>{card.movie}</Card.Title>
                  <Button className="button_clr" href={card.link}>
                    Book Tickets
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
      {/* Upcoming Movies */}
      <div
        className="upcoming_movies"
        style={{ paddingTop: "3%", paddingBottom: "5%" }}
      >
        <h3
          className="actorheadertag"
          style={{
            padding: "2%",
            color: "rgb(78, 78, 133)",
            paddingBottom: "3%",
          }}
        >
          Upcoming Movies
        </h3>
        <Slider {...settings1}>
          {upcomingMovies.map((movie, index) => (
            <div key={index} className="slider-item">
              <Card style={{ width: "18rem", padding: "10px" }}>
                <Card.Img
                  style={{ height: "200px", width: "100%" }}
                  variant="top"
                  src={movie.imageUrl}
                />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>{movie.description}</Card.Text>
                  <Button className="button_clr">Learn More</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
      {/* footer */}
    <Footer/>
    </div>
  );
}
export default Homepage;