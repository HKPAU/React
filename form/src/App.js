import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormContent from "./components/FormContent";
import {Container} from "reactstrap";
import {
    Route, Routes,
} from "react-router-dom";
import AdvancedForm from "./components/AdvancedForm";

export class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="text-center"><h1>Form Content</h1></div>
                <hr/>
                <Container className="mt-5">
                    <Routes path="/">
                        <Route exact path="/form-structure" element={<FormContent/>}/>
                        <Route exact path="/advanced-form" element={<AdvancedForm/>}/>
                    </Routes>
                </Container>
            </div>
        );
    }
}
