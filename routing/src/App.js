import 'bootstrap/dist/css/bootstrap.min.css';
import {Component} from "react";
import {Col, Container, Row} from "reactstrap";
import Products from "./components/Products";
import Categories from "./components/Categories";

import {
    Route, Routes,
} from "react-router-dom";
import NotFound from "./components/error-pages/not-found";
import Navi from "./components/navbar/navi";
import Cart from "./components/Cart";

export default class App extends Component {
    state = {
        products: [
            {"id": 1, "name": "PHP", "type": "Backend"},
            {"id": 2, "name": "Symfony", "type": "Backend"},
            {"id": 3, "name": "Laravel", "type": "Backend"},
            {"id": 4, "name": "JQuery", "type": "Frontend-Backend"},
            {"id": 5, "name": "React", "type": "Frontend"},
        ]
    }
  render() {
    return (
        <div className="App mt-5">
          <Container>
              <Navi/>
            <Row>
              <Col xs="6">
                <Categories/>
              </Col>

              <Col xs="6">
                  <Routes path="/">
                      <Route exact path="/products" element={<Products products={this.state.products}/>}/>
                      <Route path="/not-found" element={<NotFound />}/>
                      <Route path="/cart-detail" element={<Cart />}/>
                  </Routes>
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}

