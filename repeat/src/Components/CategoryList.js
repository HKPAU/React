import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";

class CategoryList extends Component {
    state = {
        categories: [
            {"name": "Technology", "id": 1},
            {"name": "Home", "id": 2},
            {"name": "Life", "id": 3},
            {"name": "Bathroom", "id": 4},
        ]
    }

    render() {
        return (
            <div>
                <div><h3>{this.props.info.title}</h3></div>
                <ListGroup>
                    {
                        this.state.categories.map(category => (
                            <ListGroupItem onClick={() => this.props.changeCategory(category)}>
                                {category.name}
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
                <div className="mt-4">
                    <b>Category Name : </b><span>{this.props.currentCategory}</span>
                </div>
            </div>
        );
    }
}

export default CategoryList;