import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Container, Row, Col} from "reactstrap";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";

function App() {
  let productInfo = {title: "Product List Header", content: "Product List Content", variant_id: 3};
  let categoryInfo = {title: "Category List Header", content: "Category List Content"};

  /*let categoryListSubTitle = "Category List Header";*/

  return (
    <div>
      <Container>
        <Row>
          <Col xs="6" className="mt-4">
            <CategoryList info={categoryInfo}/>
            {/*<CategoryList title={categoryListSubTitle}/>*/}
          </Col>
          <Col xs="6" className="mt-4">
            <ProductList info={productInfo}/>
            {/*<ProductList title="Product List"/>*/}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
