import {Container,Row,Col} from "reactstrap";
import Product from "./components/product";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
        <Container>
          <Row className={"mt-4 pt-4"}>
            <Col xs="8">
              <Product/>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
