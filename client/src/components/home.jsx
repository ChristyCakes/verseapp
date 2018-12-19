import React, { Component } from 'react';
import SimpleModal from './simplemodal';
import 'isomorphic-fetch';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 className='grey center'>How Do You Feel?</h1>
                <SimpleModal label="angry" color="primary" document="anger" />
                <SimpleModal label="content" color="secondary" document="content" />
            </div>
        )
    }
}

export default Home;