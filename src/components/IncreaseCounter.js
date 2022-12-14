import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {increaseCount} from "../actions/counterActions";
import {connect} from "react-redux";

class IncreaseCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e=>{
                    this.props.dispatch(increaseCount())
                }}>+1</button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions:bindActionCreators(increaseCount, dispatch)
    };
}

export default connect(mapDispatchToProps)(IncreaseCounter);