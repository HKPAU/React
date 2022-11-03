import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";

class Categories extends Component {
    state = {
        categories: []
    }

    componentDidMount() {
        this.getCategories();
    }

    getCategories = () => {
        fetch("http://localhost:3000/categories").then(response => response.json()).then(data => this.setState({categories: data}));
    }
    render() {
        return (
            <div>
                <h2>Categories</h2>
                <hr/>
                <div>
                    <ListGroup>
                        {this.state.categories.map(category => (
                            <ListGroupItem>
                                <b>{category.id} : </b>{category.categoryName}
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </div>
            </div>
        );
    }
}

export default Categories;