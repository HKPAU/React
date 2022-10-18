import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "reactstrap";
import CategoryList from "./Components/CategoryList";
import ProductList from "./Components/ProductList";


export default class App extends Component{
  changeCategory = category => {
    this.setState({currentCategory:category.name});
  }

  state = {"current_category": ".............."};

  render() {
    let productInfo = {"title": "Product Info", "id": 10};
    let categoryInfo = {"title": "Category Info", "id": 20};

    return (
        <div>
          <Container>
            <Row>
              <Col xs="4" className="mt-5">
                <ProductList info={productInfo}/>
              </Col>

              <Col xs="8" className="mt-5">
                <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo}/>
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}

/*export default App;*/
