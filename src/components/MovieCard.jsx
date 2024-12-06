import React from "react";
import { Card } from "antd";

const { Meta } = Card;

function MovieCard(props) {
  return (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={<img alt="example" src={props.posterUrl} />}
    >
      <Meta
        title={props.title}
        description={
          <div className="flex flex-col gap-5">
            <p>
              <strong>Desccription: </strong>
              {props.description}
            </p>
            <p>
              <strong>Rating: </strong>
              {props.rating}
            </p>
          </div>
        }
      />
    </Card>
  );
}

export default MovieCard;
