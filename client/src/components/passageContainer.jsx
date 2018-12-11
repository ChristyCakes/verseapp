import React, { Component } from 'react';
import Passage from './passage';
import * as baseService from '../services/base'

class PassageContainer extends Component {
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
        return <Passage passage={this.state.passage} />
    }
}

export default PassageContainer;