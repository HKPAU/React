import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";

class ProductList extends Component {
    render() {
        return (
            <div>
                <div><h3>{this.props.info.title}</h3></div>
                <ListGroup>
                    <ListGroupItem>
                        Cras justo odio
                    </ListGroupItem>
                    <ListGroupItem>
                        Dapibus ac facilisis in
                    </ListGroupItem>
                    <ListGroupItem>
                        Morbi leo risus
                    </ListGroupItem>
                    <ListGroupItem>
                        Porta ac consectetur ac
                    </ListGroupItem>
                    <ListGroupItem>
                        Vestibulum at eros
                    </ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}

export default ProductList;