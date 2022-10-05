import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";

class CategoryList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div><h3>{this.props.info.title}</h3></div>
                <ListGroup className="mt-4">
                    <ListGroupItem>
                        <b>{this.props.info.title}</b> / <small>{this.props.info.content}</small>
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

export default CategoryList;