import {Container, Row, Col} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";

function App() {
    let categoryInfo = {"title": "Category List"};
    let productInfo = {"title": "Product List"};
  return (
      <Container className="mt-5">
        <Row>
          <Col xs="6">
            <CategoryList info={categoryInfo}/>
          </Col>
          <Col xs="6">

            <ProductList info={productInfo}/>
          </Col>
        </Row>
      </Container>
  );
}

export default App;
