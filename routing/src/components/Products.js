import React, {Component} from 'react';
import {Table} from "reactstrap";

class Products extends Component {
    render() {
        return (
            <div>
                <Table
                >
                    <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Type
                        </th>
                        <th>
                            Options
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
                                {product.name}
                            </td>
                            <td>
                                {product.type}
                            </td>
                            <td>
                                <button className="btn btn-info btn-sm text-white">+</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Products;