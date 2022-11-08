import React, {Component} from 'react';
import {Table} from "reactstrap";

class Products extends Component {
    state = {
        products: []
    }

/*    getProducts = (categoryId) => {
        let url = "http://localhost:3000/products";
        url += "?categoryId=" + categoryId;
        fetch(url).then(response => response.json()).then(data => this.setState({products: data}))
    }*/

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
                        {this.props.products.map(product => (
                            <tr key={product.id}>
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