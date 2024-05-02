import React from "react";
import { Col } from "react-bootstrap";

const Card = (props) => {
  const { movie } = props;
  const { Poster, Title } = movie;

  return (
    <Col className="mb-2 text-center px-1">
      <img className="img-fluid movie-poster" src={Poster} alt={Title} />
    </Col>
  );
};

export default Card;