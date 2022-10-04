import React, {Component} from 'react';
import {ListGroupItem, ListGroup} from "reactstrap";
class CategoryList extends Component {
    constructor(props) {
        super(props);
        state:{}
    }
    render() {
        return (
            <div>
                <ListGroup>
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