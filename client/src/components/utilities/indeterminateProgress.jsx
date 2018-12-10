import React, { Component } from 'react';

class IndeterminateProgress extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let message = this.props.message;

        if (!message) {
            message = 'Loading...';
        }

        return (<p>{ message }</p>);
    }
}

export default IndeterminateProgress;
