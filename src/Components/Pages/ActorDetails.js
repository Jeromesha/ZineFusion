import React from "react";
import { Row, Col, Card, Descriptions, Table, Tag } from "antd";
import "../User/Details.css";

const { Meta } = Card;

const upcomingMoviesData = [
  // {
  //   title: "Leo",
  //   description:
  //     "Leo is an upcoming Indian Tamil-language action thriller film directed by Lokesh Kanagaraj and produced by S. S. Lalit Kumar and Jagadish Palanisamy.",
  //   image:
  //     "https://sund-images.sunnxt.com/175175/1920x1080_LEOOfficialTrailer_175175_775a0568-4f0f-446b-a908-f57f1dd19326.jpg",
  // },
  {
    title: "Thalapathy 68",
    description:
      "Thalapathy 68 is the working title of an upcoming Indian Tamil-language film written and directed by Venkat Prabhu and produced by AGS Entertainment.",
    image:
      "https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-103684473/103684473.jpg",
  },
  // Add more movie data items here
];

const ActorDetails = () => {
  // Sample actor details
  const actorDetails = {
    name: "Joseph Vijay Chandrasekhar",
    birthDate: "June 22, 1974",
    birthPlace: "Chennai, India",
    height: "1.78 m",
    spouse: "Sangeetha Sornalingam",
    children: ["Sanjay", "Divya"],
    nickName: "Thalapathy",
    father: "S. A. Chandrasekhar",
    mother: "Shoba Chandrasekhar",
    bio: "Joseph Vijay Chandrasekhar (born 22 June 1974), known professionally as Vijay, is an Indian actor and singer who works predominantly in Tamil cinema. He is among the highest paid actors in India and has featured in Forbes India's Celebrity 100 list on seven occasions. He has played the lead in 66 films and the International Business Times framed him as a 'consistent performer'. Referred to as Thalapathy (transl.Commander), Vijay has a significant following internationally. He has won several awards, including an Osaka Best Actor Award and a South Indian International Movie Award. In 2023, he became the highest paid actor in India and one of the top paid actors in the world.",
    filmography: [
      {
        movie: "Mersal",
        year: 2017,
        role: ["Thalapathy", "Vetrimaaran", "Maaran"],
        director: "Atlee",
        awards: [
          "Filmfare Award for Best Music Director-Tamil 2018 · A. R. Rahman",
          "Filmfare Award for Best Supporting Actress-Tamil 2018 · Nithya Menen",
          "Vijay Award for Favourite Director 2018 · Atlee Kumar",
          "Vijay Award for Favourite Film 2018 · Hema Rukmani, H.Murali, N. Ramasamy",
        ],
        boxOffice: "₹260 crores worldwide",
        cast: ["Samantha", "Nithya Menon", "kajal Agarwal", "Vadivelu"],
        crew: ["A.R. Rahman", "G.K.Vishnu", "Ruben"],
      },
      {
        movie: "Thuppakki",
        year: 2012,
        role: ["Jagadish Dhanapal"],
        director: "A.R Murugados",
        awards: [
          "Vijay Award for Favourite Director 2012 · A.R Murugados",
          "Vijay Award for Favourite Actor 2012 · Vijay",
        ], // An empty array if there are no awards
        boxOffice: "₹121 crores worldwide",
        cast: ["kajal Agarwal", "Vidyut Jamwal", "Jayaram", "Sathyan"],
        crew: [" Harris Jayaraj", "Kalaippuli S Thanu", "Santosh Sivan"],
      },
      {
        movie: "Master",
        year: 2021,
        role: ["JD / Professor James Durairaj"],
        director: "Lokesh Kanagaraj",
        awards: [
          "Filmfare Award 2022-Best Choreographer-Dinesh",
          "2022 SIIMA - Tamil Best Director-Lokesh Kanagaraj",
        ],
        boxOffice: "₹220 crores worldwide",
        cast: [
          "Vijay Sethupathi",
          "Arjun Das",
          "Malavika Mohan",
          "Gauri G. Kishan",
        ],
        crew: [
          "Anirudh Ravichander",
          "Xavier Britto",
          "Jagadish Palanisamy",
          "Philomin Raj",
          "Sathyan Sooryan",
        ],
      },
      // Add more filmography items as needed
    ],
  };

  // Columns configuration for the filmography table
  const columns = [
    {
      title: "Movie",
      dataIndex: "movie",
      key: "movie",
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (role) => (
        <span>
          {Array.isArray(role) ? (
            role.map((roles, index) => (
              <Tag key={index} color="red">
                {roles}
              </Tag>
            ))
          ) : (
            <Tag color="default">N/A</Tag>
          )}
        </span>
      ),
    },
    {
      title: "Director",
      dataIndex: "director",
      key: "director",
    },
    {
      title: "Awards",
      dataIndex: "awards",
      key: "awards",
      render: (awards) => (
        <span>
          {awards.map((award, index) => (
            <Tag key={index} color="geekblue">
              {award.trim()} {/* Remove leading/trailing spaces */}
            </Tag>
          ))}
        </span>
      ),
    },

    {
      title: "Box Office",
      dataIndex: "boxOffice",
      key: "boxOffice",
    },
    {
      title: "Cast",
      dataIndex: "cast",
      key: "cast",
      render: (cast) => (
        <span>
          {Array.isArray(cast) ? (
            cast.map((actor, index) => (
              <Tag key={index} color="blue">
                {actor}
              </Tag>
            ))
          ) : (
            <Tag color="default">N/A</Tag>
          )}
        </span>
      ),
    },
    {
      title: "Crew",
      dataIndex: "crew",
      key: "crew",
      render: (crew) => (
        <span>
          {Array.isArray(crew) ? (
            crew.map((member, index) => (
              <Tag key={index} color="yellow">
                {member}
              </Tag>
            ))
          ) : (
            <Tag color="default">N/A</Tag>
          )}
        </span>
      ),
    },
  ];

  return (
    <div style={{ padding: "3%" }}>

        {/* Basic bio */}
      <div>
        <Row gutter={16}>
          <Col span={8}>
            <Card
              style={{ border: "none" }}
              cover={
                <img
                  alt="Vijay"
                  src="https://live.staticflickr.com/65535/52787850466_00f47ecef5_b.jpg"
                  className="actor-image"
                  // Apply the styles using the defined object
                />
              }
            >
              <Meta title={actorDetails.name} description="Tamil Actor" />
            </Card>
          </Col>
          <Col span={16}>
            <Descriptions title="Actor Details">
              <Descriptions.Item label="Full Name">
                <b>{actorDetails.name}</b>
              </Descriptions.Item>
              <Descriptions.Item label="Date of Birth">
                <b>{actorDetails.birthDate}</b>
              </Descriptions.Item>
              <Descriptions.Item label="Place of Birth">
                <b>{actorDetails.birthPlace}</b>
              </Descriptions.Item>
              <Descriptions.Item label="Height">
                <b>{actorDetails.height}</b>
              </Descriptions.Item>
              <Descriptions.Item label="Spouse">
                <b>{actorDetails.spouse}</b>
              </Descriptions.Item>
              <Descriptions.Item label="Children">
                <b>{actorDetails.children.join(", ")}</b>
              </Descriptions.Item>
              <Descriptions.Item label="Nick Name">
                <b>{actorDetails.nickName}</b>
              </Descriptions.Item>
              <Descriptions.Item label="Father">
                <b>{actorDetails.father}</b>
              </Descriptions.Item>
              <Descriptions.Item label="Mother">
                <b>{actorDetails.mother}</b>
              </Descriptions.Item>
            </Descriptions>
           <Row style={{paddingTop:"2%"}}>
            <Col>
            <Descriptions.Item label="">
              {actorDetails.bio}
            </Descriptions.Item></Col>
           </Row>
          </Col>
        </Row>
      </div>

      {/* Filmography */}
      <div style={{ paddingTop: "3%" }}>
        <Row>
          <Col>
            <h4 className="mt-3 mb-3">Filmography</h4>
            <hr></hr>
            <Table
              style={{ paddingTop: "3%" }}
              columns={columns}
              dataSource={actorDetails.filmography}
              pagination={false}
            />
          </Col>
        </Row>
      </div>


      {/* upcoming_movies */}
      <div style={{ paddingTop: "3%" }}>
        <h4 className="mt-3 mb-3">Upcoming Movies</h4>
        <hr />

        <Row gutter={16} style={{ paddingTop: "3%" }}>
          {upcomingMoviesData.map((movie, index) => (
            <Col span={6} key={index}>
              <Card
                hoverable
                style={{ width: "100%" }}
                cover={<img alt={movie.title} src={movie.image} />}
              >
                <Meta title={movie.title} description={movie.description} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ActorDetails;
