import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";

class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {"title": "Technology"},
                {"title": "Home Devices"},
                {"title": "Bathroom Devices"}
            ]
        }
    }

    render() {
        return (
            <div>
                <ListGroup>
                    <ListGroupItem>
                        <b>{this.props.info.title}</b>
                    </ListGroupItem>
                    {
                        this.state.categories.map(category => (
                            <ListGroupItem onClick={() => this.props.clickFunction(category)}>
                                {category.title}
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>

                <div className="mt-4">{this.props.selectedCategory}</div>
            </div>
        );
    }
}

export default CategoryList;