import React, {Component} from 'react';
import {ListGroupItem, ListGroup} from "reactstrap";

class CategoryList extends Component {
    state = {
        categories: [
            {"title": "Technology"},
            {"title": "Home"},
            {"title": "Bathroom"},
            {"title": "Bedroom"}
        ],
        currentCategory: "Current Category"
    }

    currentCategory = (category) => {
        this.setState({currentCategory: category.title})
    }

    render() {
        return (
            <div>
                <h2>{this.props.info.title}</h2>
                <hr/>
                <ListGroup>
                    {
                        this.state.categories.map(category => (
                            <ListGroupItem onClick={() => this.currentCategory(category)}>
                                {category.title}
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
                <div className={"mt-4"}>
                    {this.state.currentCategory}
                </div>
            </div>
        );
    }
}

export default CategoryList;