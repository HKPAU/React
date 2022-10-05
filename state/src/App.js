import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "reactstrap";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";

function App() {
  let ProductListVal = {title: "Product List"};
  let CategoryListVal = {title: "Product List"};
  return (
    <div>
      <Container>
        <Row>
          <Col xs="4" className="mt-5">
            <ProductList info={ProductListVal}/>
          </Col>

          <Col xs="8" className="mt-5">
            <CategoryList info={CategoryListVal}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
