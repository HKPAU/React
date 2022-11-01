import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";

class ProductList extends Component {
    state = {
        products: []
    }

    componentDidMount(){
        this.getProducts();
    }
      
    getProducts = () => {
        fetch("http://localhost:3000/products").then(response => response.json()).then(data => this.setState({products: data}));
    }

    render() {
        return (
            <div>
                <div><h3>Products</h3></div>
                <ListGroup>
                    {this.state.products.map(product => (
                        <ListGroupItem>
                            {product.productName}
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </div>
        );
    }
}

export default ProductList;