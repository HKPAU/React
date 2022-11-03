import React, {Component} from 'react';
import {Table} from "reactstrap";

class Products extends Component {
    state = {
        products: []
    }

    componentDidMount() {
        this.getProducts();
    }

    getProducts = () => {
        fetch("http://localhost:3000/products").then(response => response.json()).then(data => this.setState({products: data}))
    }
    render() {
        return (
            <div>
                <h2>Products</h2>
                <hr/>
                <div>
                    <Table striped>
                        <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                First Name
                            </th>
                            <th>
                                Last Name
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.products.map(product => (
                            <tr>
                                <th scope="row">
                                    {product.id}
                                </th>
                                <td>
                                    {product.productName}
                                </td>
                                <td>
                                    {product.price}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default Products;