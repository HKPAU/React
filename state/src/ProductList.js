import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {id: 1, name: "Laptop"},
                {id: 2, name: "Phone"},
                {id: 3, name: "Accessories"},
                {id: 4, name: "Tablet"},
                {id: 5, name: "Watch"},
            ]
        }
    }
    render() {
        return (
            <div>
                <div><h3>{this.props.info.title}</h3></div>
                <ListGroup className="mt-4">
                    <ListGroupItem key="">
                        <h3>All Products</h3>
                    </ListGroupItem>
                    {
                        this.state.products.map(product => (
                            <ListGroupItem key={product.id}>
                                {product.name}
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
            </div>
        );
    }
}

export default ProductList;