import Navi from "../navi/Navi";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./Dashboard";
import {Container} from "react-bootstrap";

function App() {
  return (
    <div className="App">
        <Navi/>
        <Container className="mt-4">
            <Dashboard/>
        </Container>
    </div>
  );
}

export default App;
