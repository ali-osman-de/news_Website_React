import Navi from "./Navi";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import React, { Component, } from "react";
import CarouselNew from "./CarouselNew";

class Body extends Component {
  state = {
    data: [],
  };

  componentDidMount = async () => {
    const response = await axios.get(
      "https://api.collectapi.com/news/getNews?country=tr&tag=general"
    );
    this.setState({
      data: response.data,
    });
  };

  render() {
    return (
      <div>
        <Navi />
        <Container>
          <Row>
            <Col xs="8">
                <CarouselNew />
            </Col>
            <Col xs="4"></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Body;
