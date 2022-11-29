import React, {Component} from 'react';
import {FormGroup, Input, Label, FormText, FormFeedback, Form} from "reactstrap";

class FormContent extends Component {
    state = {
        username: "",
        city: ""
    }

    setStateFunction = (event) => {
        let name_content = event.target.name;
        let value_content = event.target.value;

        this.setState({[name_content]: value_content})
    }

    submitHandler = (event) => {
        event.preventDefault();
        alert(this.state.input_val);
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.submitHandler}>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Username
                        </Label>
                        <Input name="username" onChange={this.setStateFunction}/>
                        <FormFeedback>
                            You will not be able to see this
                        </FormFeedback>
                        <FormText>
                            Example help text that remains unchanged.
                        </FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Valid input
                        </Label>
                        <Input name="city" onChange={this.setStateFunction}/>
                        <FormText>
                            Example help text that remains unchanged.
                        </FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">
                            Invalid input
                        </Label>
                        <Input invalid/>
                        <FormFeedback>
                            Oh noes! that name is already taken
                        </FormFeedback>
                        <FormText>
                            Example help text that remains unchanged.
                        </FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Input without validation
                        </Label>
                        <Input/>
                        <FormFeedback tooltip>
                            You will not be able to see this
                        </FormFeedback>
                        <FormText>
                            Example help text that remains unchanged.
                        </FormText>
                    </FormGroup>
                    <FormGroup className="position-relative">
                        <Label for="exampleEmail">
                            Valid input
                        </Label>
                        <Input valid/>
                        <FormFeedback
                            tooltip
                            valid
                        >
                            Sweet! that name is available
                        </FormFeedback>
                        <FormText>
                            Example help text that remains unchanged.
                        </FormText>
                    </FormGroup>
                    <FormGroup className="position-relative">
                        <Label for="examplePassword">
                            Invalid input
                        </Label>
                        <Input invalid/>
                        <FormFeedback tooltip>
                            Oh noes! that name is already taken
                        </FormFeedback>
                        <FormText>
                            Example help text that remains unchanged.
                        </FormText>
                    </FormGroup>

                    <button type="submit" className="btn btn-success mt-5">Send</button>
                </Form>
                <hr/>
                <div className="mt-5">
                    <b>Username Value : </b> {this.state.username}
                </div>

                <div className="mt-5">
                    <b>City Value : </b> {this.state.city}
                </div>
            </div>
        );
    }
}

export default FormContent;