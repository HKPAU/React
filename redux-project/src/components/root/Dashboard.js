import React, {Component} from 'react';
import CategoryList from "../category/CategoryList";
import {Row} from "reactstrap";
import {Col} from "react-bootstrap";
import ProductList from "../product/ProductList";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs="3"><CategoryList/></Col>
                    <Col xs="9"><ProductList/></Col>
                </Row>
            </div>
        );
    }
}

export default Dashboard;