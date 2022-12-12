import {Col, Container, ListGroup, ListGroupItem, Row} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'alertifyjs/build/css/alertify.css';
import alertify from 'alertifyjs';
import {Component} from "react";

export default class App extends Component{
    state = {
        programming_languages: [
            {"language": "PHP", id: 1},
            {"language": "Laravel", id: 2},
            {"language": "Symfony", id: 3},
            {"language": "Jquery", id: 4},
            {"language": "React", id: 5},
        ]
    }

    render(){
        return (
            <div className="App">
                <Container className="mt-5">
                    <ListGroup>
                        {this.state.programming_languages.map(prog_lang => (
                            <ListGroupItem key={prog_lang.id}>
                                <Row>
                                    <Col xs="11">{prog_lang.language}</Col>
                                    <Col xs="1"><button onClick={() => {
                                        alertify
                                            .alert(`<b>Programming Language : </b> ${prog_lang.language}`, function(){
                                                alertify.message('OK');
                                            });
                                    }} className="btn btn-info text-white">See</button></Col>
                                </Row>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Container>
            </div>
        );
    }
}