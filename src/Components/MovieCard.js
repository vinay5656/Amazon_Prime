import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

//props -> movie

const price = [
  "300₹",
  "350₹",
  "150₹",
  "400₹",
  "600₹",
  "299₹",
  "499₹",
  "399₹",
  "199₹",
  "599₹",
];
let i = 0;

const MovieCard = (props) => {
  const { movie } = props;
  console.log("MovieCard Component:-", movie);

  const navigate = useNavigate();

  function handleClick() {
    // redirect to the MoviesBookingPage component
    //  and pass the movie
    let movieId = movie.show.id;
    navigate(`/bookmovie/${movieId}`, { state: { movie } });
  }

  return (
    <>
      <Card
        style={{
          width: "18rem",
          backgroundColor: "#F8E8EE",
          color: "#454545",
          textAlign: "center",
        }}
      >
        <div>
          <Card.Img
            variant="top"
            src={movie.show.image.original}
            style={{ height: "15rem" }}
          />
          <p
            style={{
              position: "absolute",
              top: "0rem",
              right: "0rem",
              zIndex: "0",
              backgroundColor: "#98EECC",
              padding: "0px 5px 5px 20px",
              borderBottomLeftRadius: "1rem",
              color: "white",
            }}
          >
            {price[i++]}
          </p>
        </div>

        <Card.Body>
          <Card.Title>{movie.show.name}</Card.Title>
          <Card.Text>
            Language: {movie.show.language}
            <br />
            Genres:
            {movie.show.genres.map((type) => {
              type = type + " ";
              return type;
            })}
            <br />
            Time: {movie.show.schedule.time}, {movie.show.schedule.days[0]}
          </Card.Text>
          <Button variant="primary" onClick={handleClick}>
            Show More
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default MovieCard;
