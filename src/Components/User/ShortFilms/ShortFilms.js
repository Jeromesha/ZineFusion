import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import "./ShortFilms.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const filmData = [
  {
    title: "Adimaithanam",
    director: "Arun D",
    releaseDate: "Feb 4, 2023",
    awards: "Best Short Film, 2023 Film Festival",
    imageUrl: "https://i.ytimg.com/vi/khyokxd5xO0/maxresdefault.jpg",
  },
  {
    title: "Garvam Kol",
    director: "Sen",
    releaseDate: "Dec 18, 2022",
    awards: "Best Short Film, 2023 Film Festival",
    imageUrl: "https://i.ytimg.com/vi/oCwO3f0YZes/maxresdefault.jpg",
  },
  {
    title: "Vidhai",
    director: "Velayudham",
    releaseDate: "Feb 26, 2020",
    awards: "Best Short Film, 2023 Film Festival",
    imageUrl: "https://i.ytimg.com/vi/CRaiIwXKEJg/maxresdefault.jpg",
  },
  {
    title: "Mobile",
    director: "Kasim Maidheen",
    releaseDate: "June 09, 2022",
    awards: "Best Short Film, 2023 Film Festival",
    imageUrl:
      "https://i.ytimg.com/vi/jDdwqmlg2eg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA45Nm1i7hbSCnVkXCHF44ME4TQ3A",
  },
  {
    title: "Vairam Ondru Kaiyil",
    director: "Vignesh Loganathan",
    releaseDate: "March 18, 2023",
    awards: "Best Short Film, 2023 Film Festival",
    imageUrl: "https://i.ytimg.com/vi/ejxgioWGmNE/maxresdefault.jpg",
  },
  {
    title: "Adimaithanam",
    director: "Arun D",
    releaseDate: "Feb 4, 2023",
    awards: "Best Short Film, 2023 Film Festival",
    imageUrl: "https://i.ytimg.com/vi/khyokxd5xO0/maxresdefault.jpg",
  },
  {
    title: "Garvam Kol",
    director: "Sen",
    releaseDate: "Dec 18, 2022",
    awards: "Best Short Film, 2023 Film Festival",
    imageUrl: "https://i.ytimg.com/vi/oCwO3f0YZes/maxresdefault.jpg",
  },
  {
    title: "Vidhai",
    director: "Velayudham",
    releaseDate: "Feb 26, 2020",
    awards: "Best Short Film, 2023 Film Festival",
    imageUrl: "https://i.ytimg.com/vi/CRaiIwXKEJg/maxresdefault.jpg",
  },
  {
    title: "Mobile",
    director: "Kasim Maidheen",
    releaseDate: "June 09, 2022",
    awards: "Best Short Film, 2023 Film Festival",
    imageUrl:
      "https://i.ytimg.com/vi/jDdwqmlg2eg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA45Nm1i7hbSCnVkXCHF44ME4TQ3A",
  },
  {
    title: "Vairam Ondru Kaiyil",
    director: "Vignesh Loganathan",
    releaseDate: "March 18, 2023",
    awards: "Best Short Film, 2023 Film Festival",
    imageUrl: "https://i.ytimg.com/vi/ejxgioWGmNE/maxresdefault.jpg",
  },
  {
    title: "Adimaithanam",
    director: "Arun D",
    releaseDate: "Feb 4, 2023",
    awards: "Best Short Film, 2023 Film Festival",
    imageUrl: "https://i.ytimg.com/vi/khyokxd5xO0/maxresdefault.jpg",
  },
  {
    title: "Garvam Kol",
    director: "Sen",
    releaseDate: "Dec 18, 2022",
    awards: "Best Short Film, 2023 Film Festival",
    imageUrl: "https://i.ytimg.com/vi/oCwO3f0YZes/maxresdefault.jpg",
  },
  {
    title: "Vidhai",
    director: "Velayudham",
    releaseDate: "Feb 26, 2020",
    awards: "Best Short Film, 2023 Film Festival",
    imageUrl: "https://i.ytimg.com/vi/CRaiIwXKEJg/maxresdefault.jpg",
  },
  {
    title: "Mobile",
    director: "Kasim Maidheen",
    releaseDate: "June 09, 2022",
    awards: "Best Short Film, 2023 Film Festival",
    imageUrl:
      "https://i.ytimg.com/vi/jDdwqmlg2eg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA45Nm1i7hbSCnVkXCHF44ME4TQ3A",
  },
  {
    title: "Vairam Ondru Kaiyil",
    director: "Vignesh Loganathan",
    releaseDate: "March 18, 2023",
    awards: "Best Short Film, 2023 Film Festival",
    imageUrl: "https://i.ytimg.com/vi/ejxgioWGmNE/maxresdefault.jpg",
  },
];

const bestFindOfTheYear = [
  {
    title: "The Elephant Whisperers",
    director: "Kartiki Gonsalves",
    releaseDate: "8 December 2022",
    awards: "Best Short Film, 2023 Film Awards",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTreZcI_-iNozhjF98s-Dx1_ew26QRLoq5Uw8Np_S_EZO3i3B8", // Replace with the actual image URL
  },
  {
    title: "Saras",
    director: "Jude Peter Damian",
    releaseDate: "16 February 2023",
    awards: "Best Short Film, 2023 Film Awards",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTcwZjBiYzItYTkyMy00OTY1LTk4YTEtNDhkYzZiODIwMGI2XkEyXkFqcGdeQXVyMTUzMzQ2NTI3._V1_.jpg", // Replace with the actual image URL
  },
  {
    title: "Little Wings (II)",
    director: "Naveen Mu",
    releaseDate: "4 March 2023",
    awards: "Best Short Film, 2023 Film Awards",
    imageUrl:
      "https://static.pib.gov.in/WriteReadData/userfiles/image/wings-46YYV.jpg", // Replace with the actual image URL
  },
  {
    title: "Maa",
    director: "Sarjun KM",
    releaseDate: "26 January 2018",
    awards: "Best Short Film, 2023 Film Awards",
    imageUrl: "https://i.ytimg.com/vi/-lKk_5qYdkk/maxresdefault.jpg", // Replace with the actual image URL
  },
  {
    title: "Vilambaram",
    director: "Rahul Ashok",
    releaseDate: "20 April 2023",
    awards: "Best Short Film, 2023 Film Awards",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMWVkMjJhM2YtOTE0NC00YTZjLWE0ZGUtZjc4NTAwOGE4NGRmXkEyXkFqcGdeQXVyMTY0MTEyNzA4._V1_.jpg", // Replace with the actual image URL
  },
  {
    title: "The Elephant Whisperers",
    director: "Kartiki Gonsalves",
    releaseDate: "8 December 2022",
    awards: "Best Short Film, 2023 Film Awards",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTreZcI_-iNozhjF98s-Dx1_ew26QRLoq5Uw8Np_S_EZO3i3B8", // Replace with the actual image URL
  },
  {
    title: "Saras",
    director: "Jude Peter Damian",
    releaseDate: "16 February 2023",
    awards: "Best Short Film, 2023 Film Awards",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTcwZjBiYzItYTkyMy00OTY1LTk4YTEtNDhkYzZiODIwMGI2XkEyXkFqcGdeQXVyMTUzMzQ2NTI3._V1_.jpg", // Replace with the actual image URL
  },
  {
    title: "Little Wings (II)",
    director: "Naveen Mu",
    releaseDate: "4 March 2023",
    awards: "Best Short Film, 2023 Film Awards",
    imageUrl:
      "https://static.pib.gov.in/WriteReadData/userfiles/image/wings-46YYV.jpg", // Replace with the actual image URL
  },
  {
    title: "Maa",
    director: "Sarjun KM",
    releaseDate: "26 January 2018",
    awards: "Best Short Film, 2023 Film Awards",
    imageUrl: "https://i.ytimg.com/vi/-lKk_5qYdkk/maxresdefault.jpg", // Replace with the actual image URL
  },
  {
    title: "Vilambaram",
    director: "Rahul Ashok",
    releaseDate: "20 April 2023",
    awards: "Best Short Film, 2023 Film Awards",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMWVkMjJhM2YtOTE0NC00YTZjLWE0ZGUtZjc4NTAwOGE4NGRmXkEyXkFqcGdeQXVyMTY0MTEyNzA4._V1_.jpg", // Replace with the actual image URL
  },
];

// function MovieTicket(props) {
//   return (
//     <div className="hero-container">
//       <div className="main-container">
//         <div className="poster-container">
//           <a href="dfgh">
//             <img
//               src={props.posterSrc}
//               className="poster"
//               alt={props.movieTitle}
//             />
//           </a>
//         </div>
//         <div className="ticket-container">
//           <div className="ticket__content">
//             <h4 className="ticket__movie-title">{props.movieTitle}</h4>
//             <p className="ticket__movie-slogan">{props.movieSlogan}</p>
//             <p className="ticket__current-price">{props.currentPrice}</p>
//             <p className="ticket__old-price">{props.oldPrice}</p>
//             <button className="ticket__buy-btn">Watch now</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function ShortFilms() {
  // var settings = {
  //   dots: false,
  //   arrows: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 5,
  //   slidesToScroll: 2,
  //   autoplay: false,
  //   autoplaySpeed: 1500,
  // };

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Number of cards to show at a time
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3, // Adjust for medium-sized screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Adjust for smaller screens
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1, // Adjust for mobile screens
        },
      },
    ],
  };

  return (
    <div>
      <div className="about">
        <Container>
          <h1 style={{ paddingTop: "3%" }}>ShortFilms</h1>
          <div>
            <Row>
              <Col>
                <a
                  href="/"
                  style={{
                    color: "#4e4e85",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  Home
                </a>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      {/* AwardWinning ShortFilms */}
      <div
        className="AwardWinningSF"
        style={{paddingBottom: "4%" }}
      >
        <div style={{ padding: "2%" }}>
          <div style={{ paddingBottom: "2%" }}>
            <Row>
              <Col>
                <h4
                  className="actorheadertag"
                  style={{
                    color: "rgb(78, 78, 133)",
                  }}
                >
                  Award Winning
                </h4>
              </Col>
            </Row>
          </div>
          <Slider {...settings1}>
            {filmData.map((film, index) => (
              <div key={index}>
                <Col md={3}>
                  <Card style={{ margin: "auto", width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={film.imageUrl}
                      alt={film.title}
                    />
                    <Card.Body>
                      <Card.Title>{film.title}</Card.Title>
                      <Card.Text>Director: {film.director}</Card.Text>
                      <Card.Text>Release Date: {film.releaseDate}</Card.Text>
                      <Card.Text>Awards: {film.awards}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            ))}
          </Slider>
        </div>
      </div>

            {/* Best Find of the Year */}
            <div
        className="AwardWinningSF"
        style={{paddingBottom: "4%" }}
      >
        <div style={{ padding: "2%" }}>
          <div style={{ paddingBottom: "2%" }}>
            <Row>
              <Col>
                <h4
                  className="actorheadertag"
                  style={{
                    color: "rgb(78, 78, 133)",
                  }}
                >
                  Best Find of the Year
                </h4>
              </Col>
            </Row>
          </div>
          <Slider {...settings1}>
            {bestFindOfTheYear.map((film, index) => (
              <div key={index}>
                <Col md={3}>
                  <Card style={{ margin: "auto",width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={film.imageUrl}
                      alt={film.title}
                      style={{height:"200px"}}
                    />
                    <Card.Body>
                      <Card.Title>{film.title}</Card.Title>
                      <Card.Text>Director: {film.director}</Card.Text>
                      <Card.Text>Release Date: {film.releaseDate}</Card.Text>
                      <Card.Text>Awards: {film.awards}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Trending Now */}
      {/* <div>
        <div style={{ padding: "2%" }}>
          <Row>
            <Col>
              <h4
                className="actorheadertag"
                style={{
                  color: "rgb(78, 78, 133)",
                }}
              >
                Trending Now
              </h4>
            </Col>
          </Row>
        </div>
        <Row>
          <Slider {...settings}>
            <Col md={3}>
              <MovieTicket
                posterSrc="https://i.ibb.co/ThPNnzM/blade-runner.jpg"
                movieTitle="Blade Runner 2049"
                movieSlogan="More human than human is our motto."
                currentPrice="Free"
                oldPrice="$44.99"
              />
            </Col>
            <Col md={3}>
              <MovieTicket
                posterSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm5mVT6u6CFgRI6Fyb6oJ3FrSHP4FIVv_5XmGiM2gquc9S4BMfjgv5qolOdjWUcfV1i64&usqp=CAU"
                movieTitle="Smile"
                movieSlogan="Overwhelming terror taking over life."
                currentPrice="Free"
                oldPrice="$34.99"
              />
            </Col>
            <Col md={3}>
              <MovieTicket
                posterSrc="https://m.media-amazon.com/images/M/MV5BNzRiYzJlZTEtZWE1ZC00NDAwLWIzNzAtZGQzMWM1ODA4YWU1XkEyXkFqcGdeQXVyODIxMzM0NTQ@._V1_.jpg"
                movieTitle="Tin & Tina"
                movieSlogan="Religion distrupts the Family"
                currentPrice="Free"
                oldPrice="$20.99"
              />
            </Col>
            <Col md={3}>
              <MovieTicket
                posterSrc="https://m.media-amazon.com/images/M/MV5BMTYyMmVhZGMtMzM1NS00MjY5LWFkNmEtYjQwNTQ5OTA2OGYwXkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_.jpg"
                movieTitle="Devi"
                movieSlogan="Tale of nine women unusual sisterhood"
                currentPrice="Free"
                oldPrice="$52.99"
              />
            </Col>
            <Col md={3}>
              <MovieTicket
                posterSrc="https://occ-0-1447-299.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABRRO-7GxCGBkpy75Vp3iE_JYLJyH-ERlZtBKCAKUuZfV-ssQJ4juWr5zrITkaYPhL3MH9Bb5zE3Z1KzzM7byyKXz9zzrFw4SOQdWOAKc70p4ooMdiga4xMyulHiSWmXcEdB3ng.jpg"
                movieTitle="The Elephant Whisperers"
                movieSlogan="The only good cage is an empty cage."
                currentPrice="Free"
                oldPrice="$39.99"
              />
            </Col>
            <Col md={3}>
              <MovieTicket
                posterSrc="https://i.ibb.co/ThPNnzM/blade-runner.jpg"
                movieTitle="Blade Runner 2049"
                movieSlogan="More human than human is our motto."
                currentPrice="Free"
                oldPrice="$44.99"
              />
            </Col>
            <Col md={3}>
              <MovieTicket
                posterSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm5mVT6u6CFgRI6Fyb6oJ3FrSHP4FIVv_5XmGiM2gquc9S4BMfjgv5qolOdjWUcfV1i64&usqp=CAU"
                movieTitle="Smile"
                movieSlogan="Overwhelming terror taking over life."
                currentPrice="Free"
                oldPrice="$34.99"
              />
            </Col>
            <Col md={3}>
              <MovieTicket
                posterSrc="https://m.media-amazon.com/images/M/MV5BNzRiYzJlZTEtZWE1ZC00NDAwLWIzNzAtZGQzMWM1ODA4YWU1XkEyXkFqcGdeQXVyODIxMzM0NTQ@._V1_.jpg"
                movieTitle="Tin & Tina"
                movieSlogan="Religion distrupts the Family"
                currentPrice="Free"
                oldPrice="$20.99"
              />
            </Col>
            <Col md={3}>
              <MovieTicket
                posterSrc="https://m.media-amazon.com/images/M/MV5BMTYyMmVhZGMtMzM1NS00MjY5LWFkNmEtYjQwNTQ5OTA2OGYwXkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_.jpg"
                movieTitle="Devi"
                movieSlogan="Tale of nine women unusual sisterhood"
                currentPrice="Free"
                oldPrice="$52.99"
              />
            </Col>
            <Col md={3}>
              <MovieTicket
                posterSrc="https://occ-0-1447-299.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABRRO-7GxCGBkpy75Vp3iE_JYLJyH-ERlZtBKCAKUuZfV-ssQJ4juWr5zrITkaYPhL3MH9Bb5zE3Z1KzzM7byyKXz9zzrFw4SOQdWOAKc70p4ooMdiga4xMyulHiSWmXcEdB3ng.jpg"
                movieTitle="The Elephant Whisperers"
                movieSlogan="The only good cage is an empty cage."
                currentPrice="Free"
                oldPrice="$39.99"
              />
            </Col>
          </Slider>
        </Row>
      </div> */}
            <div
        className="AwardWinningSF"
        style={{paddingBottom: "4%" }}
      >
        <div style={{ padding: "2%" }}>
          <div style={{ paddingBottom: "2%" }}>
            <Row>
              <Col>
                <h4
                  className="actorheadertag"
                  style={{
                    color: "rgb(78, 78, 133)",
                  }}
                >
                Trending Now
                </h4>
              </Col>
            </Row>
          </div>
          <Slider {...settings1}>
            {bestFindOfTheYear.map((film, index) => (
              <div key={index}>
                <Col md={3}>
                  <Card style={{ margin: "auto",width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={film.imageUrl}
                      alt={film.title}
                      style={{height:"200px"}}
                    />
                    <Card.Body>
                      <Card.Title>{film.title}</Card.Title>
                      <Card.Text>Director: {film.director}</Card.Text>
                      <Card.Text>Release Date: {film.releaseDate}</Card.Text>
                      <Card.Text>Awards: {film.awards}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            ))}
          </Slider>
        </div>
      </div>


    </div>
  );
}

export default ShortFilms;
