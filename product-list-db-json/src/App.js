import Categories from "./components/Categories";
import {Container, Row, Col} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import Products from "./components/Products";

export default class App extends Component{
    state = {
        categories: [],
        products: [],
        selected_category: "Test"
    }

    getCategories = () => {
        fetch("http://localhost:3000/categories").then(response => response.json()).then(data => this.setState({categories: data}));
    }

    getProducts = (categoryId) => {
        let url = "http://localhost:3000/products";
        fetch(url).then(response => response.json()).then(data => this.setState({products: data}))
    }

    getCategoryProducts = (categoryId) => {
        let url = "http://localhost:3000/products";
        url += "?categoryId=" + categoryId;
        fetch(url).then(response => response.json()).then(data => this.setState({products: data}))
    }

    changeCategory = category => {
        this.setState({selected_category: category.categoryName});
        this.getCategoryProducts(category.id);
    }

    componentDidMount() {
        this.getCategories();
        this.getProducts();
    }

    render() {
        return (
            <div className="App">
                <Container>
                    <Row>
                        <Col xs="6">
                            <Categories categories={this.state.categories} currentCategory={this.state.selected_category} selected_category={this.changeCategory}/>
                        </Col>

                        <Col xs="6">
                            <Products products={this.state.products}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
