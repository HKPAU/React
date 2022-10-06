import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";

class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
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
                <div><h3>{this.props.info.title} - {this.props.info.title_id}</h3></div>
                <ListGroup>
                    {
                        this.state.categories.map(category => (
                            <ListGroupItem onClick={() => this.changeCategory(category)} key={category.id}>
                                {category.name}
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
                <div className="mt-4">
                    <h4>{this.props.addingCat.title}</h4>
                </div>
            </div>
        );
    }
}

export default CategoryList;