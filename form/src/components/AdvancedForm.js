import React, {Component} from 'react';
import 'alertifyjs/build/css/alertify.css';
import alertify from 'alertifyjs';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

class AdvancedForm extends Component {
    state = {
        email: "",
        password: "",
        city: "",
        description: "",
        gender: ""
    }

    changeUserInfo = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({[name]: value});
    }

    submitHandler = (event) => {
        event.preventDefault();
        alertify.success('User Added');
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.submitHandler}>
                    {/*E-Mail*/}
                    <FormGroup>
                        <Label for="exampleEmail">
                            Email
                        </Label>
                        <Input
                            id="emailId"
                            name="email"
                            placeholder="E-Mail"
                            type="email"
                            onChange={this.changeUserInfo}
                        />
                    </FormGroup>

                    {/*Password*/}
                    <FormGroup>
                        <Label for="examplePassword">
                            Password
                        </Label>
                        <Input
                            id="passwordId"
                            name="password"
                            placeholder="Password"
                            type="password"
                            onChange={this.changeUserInfo}
                        />
                    </FormGroup>

                    {/*City*/}
                    <FormGroup>
                        <Label for="citySelect">
                            City
                        </Label>
                        <Input
                            id="citySelect"
                            name="city"
                            type="select"
                            onChange={this.changeUserInfo}
                        >
                            <option>
                                Izmir
                            </option>
                            <option>
                                Denizli
                            </option>
                            <option>
                                Istanbul
                            </option>
                            <option>
                                Ankara
                            </option>
                            <option>
                                Konya
                            </option>
                        </Input>
                    </FormGroup>

                    {/*Description*/}
                    <FormGroup>
                        <Label for="exampleText">
                            Desription
                        </Label>
                        <Input
                            id="descriptionId"
                            name="description"
                            type="textarea"
                            onChange={this.changeUserInfo}
                        />
                    </FormGroup>

                    {/*Gender*/}
                    <FormGroup tag="fieldset">
                        <legend>
                            Gender
                        </legend>
                        <FormGroup check>
                            <Input
                                name="gender"
                                type="radio"
                                value="man"
                                onChange={this.changeUserInfo}
                            />
                            {' '}
                            <Label check>
                                Man
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Input
                                name="gender"
                                type="radio"
                                value="woman"
                                onChange={this.changeUserInfo}
                            />
                            {' '}
                            <Label check>
                                Woman
                            </Label>
                        </FormGroup>
                    </FormGroup>

                    <Button type="submit" className="btn btn-outline-success text-success bg-white">
                        Save
                    </Button>
                </Form>

                <hr/>

                <div><b>E-Mail : </b> {this.state.email}</div>
                <div><b>Password : </b> {this.state.password}</div>
                <div><b>City : </b> {this.state.city}</div>
                <div><b>Description : </b> {this.state.description}</div>
                <div><b>Gender : </b> {this.state.gender}</div>
            </div>
        );
    }
}

export default AdvancedForm;