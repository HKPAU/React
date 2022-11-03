import Products from "./components/Products";
import Categories from "./components/Categories";
import {Container, Row, Col} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Container>
          <Row>
              <Col xs="6">
                <Categories/>
              </Col>

              <Col xs="6">
                <Products/>
              </Col>
          </Row>
      </Container>
    </div>
  );
}

export default App;
