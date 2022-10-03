import {Container,Row,Col} from "reactstrap";
import Category from "./components/Category";
import Product from "./components/Product";
import Info from "./components/Info";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
        <Container>
          <Row className={"text-center"}>
              <Info/>
          </Row>
          <Row className={"mt-4 pt-4"}>
            <Col xs="4">
              <Category/>
            </Col>
            <Col xs="8">
              <Product/>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
