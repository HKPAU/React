import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "reactstrap";
import ProductList from "./components/ProductList";
import CategoryList from "./components/CategoryList";
import {Component} from "react";

export class App extends Component{
  state={selectedCategory: ""}

  clickFunction = category => {
    this.setState({selectedCategory:category.title})
  };

  render(){
    let categoryList = {"title": "Category List"};
    let productList = {"title": "Product List"};

    return (
        <div>
          <Container>
            <Row>
              <Col xs="5">
                <CategoryList selectedCategory={this.state.selectedCategory} clickFunction={this.clickFunction} info={categoryList}/>
              </Col>

              <Col xs="7">
                <ProductList info={productList}/>
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}

export default App;
