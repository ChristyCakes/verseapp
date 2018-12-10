import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Bubble from './bubble'
import cyan from '@material-ui/core/colors/cyan';
const cyan400 = cyan['A400'];
import Button from '@material-ui/core/Button';
import { AuthButton } from './auth';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1 className='grey'>How Do You Feel?</h1>
                <Bubble label="angry" color="secondary" />
                <Bubble label="happy" color="primary" />
                <Link to={'/more'}>
                    <Button
                        variant="outlined"
                    >More Emotions</Button>
                </Link>
                {/* <AuthButton /> */}
            </div>
        )
    }
}

export default Home;