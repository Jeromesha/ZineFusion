import React from 'react';
import { Row, Col, Card,Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Movies() {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 1500,
  };

  const genres = ['Adventures', 'Thriller', 'Drama', 'Family', 'Comedy', 'Romance'];

  const moviesByGenre = {
    Adventures: [
      {
        img: "https://m.media-amazon.com/images/M/MV5BOGQ2OTNmODQtNDRkOC00ODRmLTkwOWQtMmU1NjdmODQ0NTA3XkEyXkFqcGdeQXVyMTMxODA4Njgx._V1_FMjpg_UX1000_.jpg",
        ratings: "⭐ 9.3 / 10",
        description: "2023 ‧ Gangster/Adventure",
        name: "Leo",
      },
      {
        img: "https://www.livemint.com/lm-img/img/2023/09/03/600x338/Jailer_box_office_collection_1693707827390_1693707827630.png",
        ratings: "⭐ 7.5 / 10",
        description: " 2023 ‧ Action/Adventure ‧ 2h 48m",
        name: "Jailer",
      },
      {
        img: "https://m.timesofindia.com/photo/98510430/size-206428/98510430.jpg",
        ratings: "⭐ 8.5 / 10",
        description: " 2023 ‧ Fantasy/Adventure ‧ 2h 2m",
        name: "Mark Antony",
      },
      {
        img: "https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_webp,q_auto:eco/resources/0-0-230188/list/1170x658withlog1343131532.jpg",
        ratings: "⭐ 5.6 / 10",
        description: "2017 ‧ Action/Adventure ‧ 2h 20m",
        name: "Vanamagan",
      },
      {
        img: "https://1847884116.rsc.cdn77.org/tamil/gallery/movies/karthi17/main.jpg",
        ratings: "⭐ 4.8 / 10",
        description: "2019 ‧ Romance/Action ‧ 2h 38m",
        name: "Dev",
      },
      {
        img: "https://cdn.gulte.com/wp-content/uploads/2022/08/karthikeya-2-1.jpg",
        ratings: "⭐ 6.8 / 10",
        description: "2022 ‧ Adventure/Thriller ‧ 2h 30m",
        name: "Karthikeya 2",
      },
    ],
    Thriller: [
      {
        img: "https://m.media-amazon.com/images/M/MV5BOGQ2OTNmODQtNDRkOC00ODRmLTkwOWQtMmU1NjdmODQ0NTA3XkEyXkFqcGdeQXVyMTMxODA4Njgx._V1_FMjpg_UX1000_.jpg",
        ratings: "⭐ 9.3 / 10",
        description: "2023 ‧ Gangster/Adventure",
        name: "Leo",
      },
      {
        img: "https://www.livemint.com/lm-img/img/2023/09/03/600x338/Jailer_box_office_collection_1693707827390_1693707827630.png",
        ratings: "⭐ 7.5 / 10",
        description: " 2023 ‧ Action/Comedy ‧ 2h 48m",
        name: "Jailer",
      },
      {
        img: "https://assets-in.bmscdn.com/discovery-catalog/events/et00367623-punpmnfqex-landscape.jpg",
        ratings: "⭐ 7.8 / 10",
        description: "2023 ‧ Comedy/Thriller ‧ 2h 14m",
        name: "Lucky Man",
      },
      {
        img: "https://m.timesofindia.com/photo/98510430/size-206428/98510430.jpg",
        ratings: "⭐ 8.5 / 10",
        description: " 2023 ‧ Fantasy/Adventure ‧ 2h 2m",
        name: "Mark Antony",
      },
      {
        img: "https://i.ytimg.com/vi/7cIxQQQCX7E/maxresdefault.jpg",
        ratings: "⭐ 6.4 / 10",
        description: " 2023 ‧ Adventure/Comedy ‧ 2h 14m",
        name: "Kick",
      },
      {
        img: "https://thesouthfirst.com/wp-content/uploads/2023/08/A-poster-of-the-film-Adiyae.jpg",
        ratings: "⭐ 7.6 / 10",
        description: " 2023 ‧ Fantasy/Romance ‧ 2h 19m",
        name: "Adiyae",
      },
    ],
    Drama: [
      {
        img: "https://m.media-amazon.com/images/M/MV5BOGQ2OTNmODQtNDRkOC00ODRmLTkwOWQtMmU1NjdmODQ0NTA3XkEyXkFqcGdeQXVyMTMxODA4Njgx._V1_FMjpg_UX1000_.jpg",
        ratings: "⭐ 9.3 / 10",
        description: "2023 ‧ Gangster/Adventure",
        name: "Leo",
      },
      {
        img: "https://www.livemint.com/lm-img/img/2023/09/03/600x338/Jailer_box_office_collection_1693707827390_1693707827630.png",
        ratings: "⭐ 7.5 / 10",
        description: " 2023 ‧ Action/Comedy ‧ 2h 48m",
        name: "Jailer",
      },
      {
        img: "https://assets-in.bmscdn.com/discovery-catalog/events/et00367623-punpmnfqex-landscape.jpg",
        ratings: "⭐ 7.8 / 10",
        description: "2023 ‧ Comedy/Thriller ‧ 2h 14m",
        name: "Lucky Man",
      },
      {
        img: "https://m.timesofindia.com/photo/98510430/size-206428/98510430.jpg",
        ratings: "⭐ 8.5 / 10",
        description: " 2023 ‧ Fantasy/Adventure ‧ 2h 2m",
        name: "Mark Antony",
      },
      {
        img: "https://i.ytimg.com/vi/7cIxQQQCX7E/maxresdefault.jpg",
        ratings: "⭐ 6.4 / 10",
        description: " 2023 ‧ Adventure/Comedy ‧ 2h 14m",
        name: "Kick",
      },
      {
        img: "https://thesouthfirst.com/wp-content/uploads/2023/08/A-poster-of-the-film-Adiyae.jpg",
        ratings: "⭐ 7.6 / 10",
        description: " 2023 ‧ Fantasy/Romance ‧ 2h 19m",
        name: "Adiyae",
      },
    ],
    Family: [
      {
        img: "https://m.media-amazon.com/images/M/MV5BOGQ2OTNmODQtNDRkOC00ODRmLTkwOWQtMmU1NjdmODQ0NTA3XkEyXkFqcGdeQXVyMTMxODA4Njgx._V1_FMjpg_UX1000_.jpg",
        ratings: "⭐ 9.3 / 10",
        description: "2023 ‧ Gangster/Adventure",
        name: "Leo",
      },
      {
        img: "https://www.livemint.com/lm-img/img/2023/09/03/600x338/Jailer_box_office_collection_1693707827390_1693707827630.png",
        ratings: "⭐ 7.5 / 10",
        description: " 2023 ‧ Action/Comedy ‧ 2h 48m",
        name: "Jailer",
      },
      {
        img: "https://assets-in.bmscdn.com/discovery-catalog/events/et00367623-punpmnfqex-landscape.jpg",
        ratings: "⭐ 7.8 / 10",
        description: "2023 ‧ Comedy/Thriller ‧ 2h 14m",
        name: "Lucky Man",
      },
      {
        img: "https://m.timesofindia.com/photo/98510430/size-206428/98510430.jpg",
        ratings: "⭐ 8.5 / 10",
        description: " 2023 ‧ Fantasy/Adventure ‧ 2h 2m",
        name: "Mark Antony",
      },
      {
        img: "https://i.ytimg.com/vi/7cIxQQQCX7E/maxresdefault.jpg",
        ratings: "⭐ 6.4 / 10",
        description: " 2023 ‧ Adventure/Comedy ‧ 2h 14m",
        name: "Kick",
      },
      {
        img: "https://thesouthfirst.com/wp-content/uploads/2023/08/A-poster-of-the-film-Adiyae.jpg",
        ratings: "⭐ 7.6 / 10",
        description: " 2023 ‧ Fantasy/Romance ‧ 2h 19m",
        name: "Adiyae",
      },
    ],
    Comedy: [
      {
        img: "https://m.media-amazon.com/images/M/MV5BOGQ2OTNmODQtNDRkOC00ODRmLTkwOWQtMmU1NjdmODQ0NTA3XkEyXkFqcGdeQXVyMTMxODA4Njgx._V1_FMjpg_UX1000_.jpg",
        ratings: "⭐ 9.3 / 10",
        description: "2023 ‧ Gangster/Adventure",
        name: "Leo",
      },
      {
        img: "https://www.livemint.com/lm-img/img/2023/09/03/600x338/Jailer_box_office_collection_1693707827390_1693707827630.png",
        ratings: "⭐ 7.5 / 10",
        description: " 2023 ‧ Action/Comedy ‧ 2h 48m",
        name: "Jailer",
      },
      {
        img: "https://assets-in.bmscdn.com/discovery-catalog/events/et00367623-punpmnfqex-landscape.jpg",
        ratings: "⭐ 7.8 / 10",
        description: "2023 ‧ Comedy/Thriller ‧ 2h 14m",
        name: "Lucky Man",
      },
      {
        img: "https://m.timesofindia.com/photo/98510430/size-206428/98510430.jpg",
        ratings: "⭐ 8.5 / 10",
        description: " 2023 ‧ Fantasy/Adventure ‧ 2h 2m",
        name: "Mark Antony",
      },
      {
        img: "https://i.ytimg.com/vi/7cIxQQQCX7E/maxresdefault.jpg",
        ratings: "⭐ 6.4 / 10",
        description: " 2023 ‧ Adventure/Comedy ‧ 2h 14m",
        name: "Kick",
      },
      {
        img: "https://thesouthfirst.com/wp-content/uploads/2023/08/A-poster-of-the-film-Adiyae.jpg",
        ratings: "⭐ 7.6 / 10",
        description: " 2023 ‧ Fantasy/Romance ‧ 2h 19m",
        name: "Adiyae",
      },
    ],
    Romance: [
      {
        img: "https://m.media-amazon.com/images/M/MV5BOGQ2OTNmODQtNDRkOC00ODRmLTkwOWQtMmU1NjdmODQ0NTA3XkEyXkFqcGdeQXVyMTMxODA4Njgx._V1_FMjpg_UX1000_.jpg",
        ratings: "⭐ 9.3 / 10",
        description: "2023 ‧ Gangster/Adventure",
        name: "Leo",
      },
      {
        img: "https://www.livemint.com/lm-img/img/2023/09/03/600x338/Jailer_box_office_collection_1693707827390_1693707827630.png",
        ratings: "⭐ 7.5 / 10",
        description: " 2023 ‧ Action/Comedy ‧ 2h 48m",
        name: "Jailer",
      },
      {
        img: "https://assets-in.bmscdn.com/discovery-catalog/events/et00367623-punpmnfqex-landscape.jpg",
        ratings: "⭐ 7.8 / 10",
        description: "2023 ‧ Comedy/Thriller ‧ 2h 14m",
        name: "Lucky Man",
      },
      {
        img: "https://m.timesofindia.com/photo/98510430/size-206428/98510430.jpg",
        ratings: "⭐ 8.5 / 10",
        description: " 2023 ‧ Fantasy/Adventure ‧ 2h 2m",
        name: "Mark Antony",
      },
      {
        img: "https://i.ytimg.com/vi/7cIxQQQCX7E/maxresdefault.jpg",
        ratings: "⭐ 6.4 / 10",
        description: " 2023 ‧ Adventure/Comedy ‧ 2h 14m",
        name: "Kick",
      },
      {
        img: "https://thesouthfirst.com/wp-content/uploads/2023/08/A-poster-of-the-film-Adiyae.jpg",
        ratings: "⭐ 7.6 / 10",
        description: " 2023 ‧ Fantasy/Romance ‧ 2h 19m",
        name: "Adiyae",
      },
    ],
  };

  const renderMovies = (genre) => {
    // Show movies of the selected genre
    const moviesToDisplay = moviesByGenre[genre];

    return moviesToDisplay.map((card, index) => (
      <Col md={4} style={{ paddingTop: '3%'}} key={index}>
        <Card style={{ width: '20rem' }}>
          <Card.Img
            style={{ height: '200px', width: '100%' }}
            src={card.img}
            alt=""
          />
          <Card.Body>
            <Card.Text>{card.ratings}</Card.Text>
            <Card.Text>{card.description}</Card.Text>
            <Card.Title>{card.name}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  return (
    <div>
          <div className="about">
        <Container>
        <h1 style={{ paddingTop: "3%" }}>Movies</h1>
        <div>
          <Row>
            <Col>
              <a
                href="/"
                style={{
                  color: "#4e4e85",
                  display: "flex",
                  justifyContent: "end",
                  paddingBottom:"3%"
                }}
              >
                Home
              </a>
            </Col>
          </Row>
        </div>
        </Container>
      </div >
      {genres.map((genre, index) => (
        <div  key={index} style={{ paddingTop: '3%', padding:"3%"}}>
         <Row>
            <Col >
            <h4
              className="actorheadertag"  
              style={{
                color: 'rgb(78, 78, 133)',
              }}
            >
              {genre} Movies
            </h4>
            <Slider {...settings}>{renderMovies(genre)}</Slider>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
}

export default Movies;