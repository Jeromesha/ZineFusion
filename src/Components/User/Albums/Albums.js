import React from 'react';
import {Row,Col,Container} from "react-bootstrap";
import "../../../index.css";

function MovieTicket(props) {
  return (
    <div className="hero-container">
      <div className="main-container">
        <div className="poster-container">
          <a href="dfgh">
            <img
              src={props.posterSrc}
              className="poster"
              alt={props.movieTitle}
            />
          </a>
        </div>
        <div className="ticket-container">
          <div className="ticket__content">
            <h4 className="ticket__movie-title">{props.movieTitle}</h4>
            <p className="ticket__movie-slogan">{props.movieSlogan}</p>
            <p className="ticket__current-price">{props.currentPrice}</p>
            <p className="ticket__old-price">{props.oldPrice}</p>
            <button className="ticket__buy-btn">Watch now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const movieData = [
    {
      posterSrc: "https://i.ibb.co/ThPNnzM/blade-runner.jpg",
      movieTitle: "Blade Runner 2049",
      movieSlogan: "More human than human is our motto.",
      currentPrice: "Free",
      oldPrice: "$44.99"
    },
    {
      posterSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm5mVT6u6CFgRI6Fyb6oJ3FrSHP4FIVv_5XmGiM2gquc9S4BMfjgv5qolOdjWUcfV1i64&usqp=CAU",
      movieTitle: "Smile",
      movieSlogan: "Overwhelming terror taking over life.",
      currentPrice: "Free",
      oldPrice: "$34.99"
    },
    {
      posterSrc: "https://m.media-amazon.com/images/M/MV5BNzRiYzJlZTEtZWE1ZC00NDAwLWIzNzAtZGQzMWM1ODA4YWU1XkEyXkFqcGdeQXVyODIxMzM0NTQ@._V1_.jpg",
      movieTitle: "Tin & Tina",
      movieSlogan: "Religion disrupts the Family",
      currentPrice: "Free",
      oldPrice: "$20.99"
    },
    {
      posterSrc: "https://m.media-amazon.com/images/M/MV5BMTYyMmVhZGMtMzM1NS00MjY5LWFkNmEtYjQwNTQ5OTA2OGYwXkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_.jpg",
      movieTitle: "Devi",
      movieSlogan: "Tale of nine women unusual sisterhood",
      currentPrice: "Free",
      oldPrice: "$52.99"
    },
    {
      posterSrc: "https://occ-0-1447-299.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABRRO-7GxCGBkpy75Vp3iE_JYLJyH-ERlZtBKCAKUuZfV-ssQJ4juWr5zrITkaYPhL3MH9Bb5zE3Z1KzzM7byyKXz9zzrFw4SOQdWOAKc70p4ooMdiga4xMyulHiSWmXcEdB3ng.jpg",
      movieTitle: "The Elephant Whisperers",
      movieSlogan: "The only good cage is an empty cage.",
      currentPrice: "Free",
      oldPrice: "$39.99"
    },
    {
        posterSrc: "https://i.ibb.co/ThPNnzM/blade-runner.jpg",
        movieTitle: "Blade Runner 2049",
        movieSlogan: "More human than human is our motto.",
        currentPrice: "Free",
        oldPrice: "$44.99"
      },
      {
        posterSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm5mVT6u6CFgRI6Fyb6oJ3FrSHP4FIVv_5XmGiM2gquc9S4BMfjgv5qolOdjWUcfV1i64&usqp=CAU",
        movieTitle: "Smile",
        movieSlogan: "Overwhelming terror taking over life.",
        currentPrice: "Free",
        oldPrice: "$34.99"
      },
      {
        posterSrc: "https://m.media-amazon.com/images/M/MV5BNzRiYzJlZTEtZWE1ZC00NDAwLWIzNzAtZGQzMWM1ODA4YWU1XkEyXkFqcGdeQXVyODIxMzM0NTQ@._V1_.jpg",
        movieTitle: "Tin & Tina",
        movieSlogan: "Religion disrupts the Family",
        currentPrice: "Free",
        oldPrice: "$20.99"
      },
      {
        posterSrc: "https://m.media-amazon.com/images/M/MV5BMTYyMmVhZGMtMzM1NS00MjY5LWFkNmEtYjQwNTQ5OTA2OGYwXkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_.jpg",
        movieTitle: "Devi",
        movieSlogan: "Tale of nine women unusual sisterhood",
        currentPrice: "Free",
        oldPrice: "$52.99"
      },
      {
        posterSrc: "https://occ-0-1447-299.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABRRO-7GxCGBkpy75Vp3iE_JYLJyH-ERlZtBKCAKUuZfV-ssQJ4juWr5zrITkaYPhL3MH9Bb5zE3Z1KzzM7byyKXz9zzrFw4SOQdWOAKc70p4ooMdiga4xMyulHiSWmXcEdB3ng.jpg",
        movieTitle: "The Elephant Whisperers",
        movieSlogan: "The only good cage is an empty cage.",
        currentPrice: "Free",
        oldPrice: "$39.99"
      },
      {
        posterSrc: "https://i.ibb.co/ThPNnzM/blade-runner.jpg",
        movieTitle: "Blade Runner 2049",
        movieSlogan: "More human than human is our motto.",
        currentPrice: "Free",
        oldPrice: "$44.99"
      },
      {
        posterSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm5mVT6u6CFgRI6Fyb6oJ3FrSHP4FIVv_5XmGiM2gquc9S4BMfjgv5qolOdjWUcfV1i64&usqp=CAU",
        movieTitle: "Smile",
        movieSlogan: "Overwhelming terror taking over life.",
        currentPrice: "Free",
        oldPrice: "$34.99"
      },
      {
        posterSrc: "https://m.media-amazon.com/images/M/MV5BNzRiYzJlZTEtZWE1ZC00NDAwLWIzNzAtZGQzMWM1ODA4YWU1XkEyXkFqcGdeQXVyODIxMzM0NTQ@._V1_.jpg",
        movieTitle: "Tin & Tina",
        movieSlogan: "Religion disrupts the Family",
        currentPrice: "Free",
        oldPrice: "$20.99"
      },
      {
        posterSrc: "https://m.media-amazon.com/images/M/MV5BMTYyMmVhZGMtMzM1NS00MjY5LWFkNmEtYjQwNTQ5OTA2OGYwXkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_.jpg",
        movieTitle: "Devi",
        movieSlogan: "Tale of nine women unusual sisterhood",
        currentPrice: "Free",
        oldPrice: "$52.99"
      },
      {
        posterSrc: "https://occ-0-1447-299.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABRRO-7GxCGBkpy75Vp3iE_JYLJyH-ERlZtBKCAKUuZfV-ssQJ4juWr5zrITkaYPhL3MH9Bb5zE3Z1KzzM7byyKXz9zzrFw4SOQdWOAKc70p4ooMdiga4xMyulHiSWmXcEdB3ng.jpg",
        movieTitle: "The Elephant Whisperers",
        movieSlogan: "The only good cage is an empty cage.",
        currentPrice: "Free",
        oldPrice: "$39.99"
      },
    
  ];
function Albums() {
    return (
        <div>
        <div>
          <div style={{ padding: "2%" }}>
          <div className="about">
          <Container>
            <h1>Albums</h1>
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
          </div>
          <Row style={{ margin: 0 }}>
            {/* Use the map function to render movie tickets */}
            {movieData.map((movie, index) => (
              <Col md={3} key={index}>
                <MovieTicket
                  posterSrc={movie.posterSrc}
                  movieTitle={movie.movieTitle}
                  movieSlogan={movie.movieSlogan}
                  currentPrice={movie.currentPrice}
                  oldPrice={movie.oldPrice}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
      )
    }
    
    export default Albums;
    