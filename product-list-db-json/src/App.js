import Categories from "./components/Categories";
import Navi from "./components/Navi";
import {Container, Row, Col} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import Products from "./components/Products";

export default class App extends Component{
    state = {
        categories: [],
        products: [],
        selected_category_id: "",
        selected_category_name: "",
        cart_products: [],
    }

    addToCart = (product) => {
    
        let newCart = this.state.cart_products;
        var productControl = newCart.find(p => p.product_id === product.id);
        if(productControl){
            productControl.product_count += 1;
        }else{
            newCart.push({product_id: product.id, product_count: 1, product_name:product.productName});
        }
        this.setState({cart_products: newCart});
    }

    removeFromCart = (deletedProduct) => {
        let newCart = this.state.cart_products.filter(p => p.product_id!==deletedProduct);
        this.setState({cart_products: newCart});
    }

    getCategories = () => {
        fetch("http://localhost:3000/categories").then(response => response.json()).then(data => this.setState({categories: data}));
    }

    getProducts = (categoryId) => {
        let url = "http://localhost:3000/products";
        fetch(url).then(response => response.json()).then(data => this.setState({products: data}))
    }

    getCategoryProducts = (category) => {
        let url = "http://localhost:3000/products";
        url += "?categoryId=" + category.id;
        this.setState({selected_category_id: category.id, selected_category_name: category.categoryName});
        fetch(url).then(response => response.json()).then(data => this.setState({products: data}))
    }

    changeCategory = category => {
        this.setState({selected_category: category.categoryName});
        this.getCategoryProducts(category);
    }

    componentDidMount() {
        this.getCategories();
        this.getProducts();
    }

    render() {
        return (
            <div className="App">
                <Container>
                    <Navi delete_product={this.removeFromCart} cart_product={this.state.cart_products}/>
                    <Row>
                        <Col xs="6">
                            <Categories 
                                categories={this.state.categories} 
                                currentCategory={this.state.selected_category_id} 
                                selected_category={this.changeCategory}
                                selected_category_name={this.state.selected_category_name}
                            />
                        </Col>

                        <Col xs="6">
                            <Products addCart={this.addToCart} products={this.state.products}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
