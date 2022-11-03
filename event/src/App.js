import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "reactstrap";
import CategoryList from "./Components/CategoryList";
import ProductList from "./Components/ProductList";


export default class App extends Component{
  state = {currentCategory:"Hasan Kacar"};

  changeCategory = category => {
    this.setState({currentCategory: category.name + " - " + category.id});
  }

  render() {
    let ProductListVal = {title: "Product List", title_id: 1};
    let CategoryListVal = {title: "Category List", title_id: 2};

    return (
        <div>
          <Container>
            <Row>
              <Col xs="4" className="mt-5">
                <ProductList info={ProductListVal}/>
              </Col>

              <Col xs="8" className="mt-5">
                <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={CategoryListVal}/>
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}

/*export default App;*/
