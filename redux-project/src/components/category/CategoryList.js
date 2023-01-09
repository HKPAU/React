import React, {Component} from 'react';
import {connect} from "react-redux";
import {changeCategory} from "../../redux/actions/categoryAction";

class CategoryList extends Component {
    render() {
        return (
            <div>
                <h3>Category List</h3>
                <hr/>
                <h6>Seçili Kategori : {this.props.currentCategory.name}</h6>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        currentCategory: state.categoryReducer
    }
}

export default connect(mapStateToProps)(CategoryList);