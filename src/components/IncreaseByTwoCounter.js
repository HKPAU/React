import React, {Component} from 'react';
import {increaseDoubleCounter} from "../actions/counterActions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class IncreaseByTwoCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={event => this.props.dispatch(increaseDoubleCounter())}>
                    +2
                </button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions:bindActionCreators(increaseDoubleCounter, dispatch)
    };
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter);
