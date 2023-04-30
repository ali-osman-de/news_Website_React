import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

class CarouselNew extends Component {
  render() {
    return (
      <div>
        <h1 className="fw-light fs-4 text-center mt-4 d-flex mx-auto">
          News
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="black"
            class="bi bi-bookmark-check d-flex ms-auto"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
            />
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
          </svg>
        </h1>
        <hr />
        {this.props.data.map((item, index) => (
          <Card
            body
            color="warning"
            outline
            key={index}
            className="mt-3"
          >
            <img alt="Sample" src={item.urlToImage} />
            <CardBody>
              <CardTitle className="fw-semibold" tag={"h5"}>
                {item.title}
              </CardTitle>
              <CardSubtitle className="mb-2 text-muted fw-lighter" tag="h6">
                {item.author}
              </CardSubtitle>
              <CardText>{item.description}</CardText>
              <Button
                color="warning"
                href={item.url}
                className="fw-light text-center"
              >
                Read More
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>
    );
  }
}

export default CarouselNew;
