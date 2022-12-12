import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    render() {
        return (
            <div>
                <h2>Categories</h2>
                <hr/>
                <div>
                    <ListGroup>
                        {this.props.categories.map(category => (
                            <ListGroupItem active={category.id===this.props.currentCategory?true:false} key={category.id} onClick={() => this.props.selected_category(category)}>
                                <b>{category.id} : </b>{category.categoryName}
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </div>

                <div><b>Category : </b> <span>{this.props.selected_category_name}</span></div>
            </div>
        );
    }
}

export default Categories;