import Navi from "./Navi";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import React, { Component } from "react";
import CarouselNew from "./CarouselNew";
import Partici from "./Partici";
import Footer from "./Footer";


class Body extends Component {
  state = {
    data: [],
  };

  componentDidMount = async () => {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=32a3c6d4d6544594a685f7507719369e"
    );
    this.setState({
      data: response.data["articles"],
    });
    // console.log(this.state.data);
  };

  render() {
    return (
      <div>
        <Navi />
        <Container>
          <Row>
            <Col xs="7">
              <CarouselNew data={this.state.data} />
            </Col>
            <Col xs="5">
              <Partici data={this.state.data} />
            </Col>
          </Row>
        </Container>
        <Footer>
          
        </Footer>
      </div>
    );
  }
}

export default Body;
