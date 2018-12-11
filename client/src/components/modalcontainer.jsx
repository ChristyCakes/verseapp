import React, { Component } from 'react';
import SimpleModal from './simplemodal';
import * as baseService from '../services/base'

class ModalContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { passage: {} }
    }

    componentDidMount() {
        baseService.get('/api/passage')
            .then(data => {
                this.setState({ passage: data.passage })
            })
            .catch(err => {
                alert("Your Verse Failed to Load");
                console.log(err)
            })
    }

    render() {
        return <SimpleModal passage={this.state.passage} label={this.props.label} color={this.props.color}/>
    }
}

export default ModalContainer;