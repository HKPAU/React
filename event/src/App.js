import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "reactstrap";
import CategoryList from "./Components/CategoryList";
import ProductList from "./Components/ProductList";
import {Component} from "react";


export class App extends Component{
  ProductListVal = {title: "Product List", title_id: 1};
  CategoryListVal = {title: "Category List", title_id: 2};

  addingCat = {title: "Hasan Kacar"};

  changeCategory = category => {
    this.setState({adding_category_name: "Hasan Kacar's Category Name - " + category.id});
  }

  render() {
    return (
        <div>
          <Container>
            <Row>
              <Col xs="4" className="mt-5">
                <ProductList info={this.ProductListVal}/>
              </Col>

              <Col xs="8" className="mt-5">
                <CategoryList addingCat={this.addingCat} changeCategory={this.changeCategory} info={this.CategoryListVal}/>
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}

export default App;
