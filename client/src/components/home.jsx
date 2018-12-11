import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Bubble from './bubble'
import Button from '@material-ui/core/Button';
// import { AuthButton } from './auth';
import * as baseService from '../services/base';
import SimpleModal from './simplemodal';
import ModalContainer from './modalcontainer';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            verses: "",
        }
        // this.postVerse = this.postVerse.bind(this);
        // this.inputHandler = this.inputHandler.bind(this);
    }


    // inputHandler(event) { this.setState({ [event.target.name]: event.target.value }) };

    // postVerse(event) {
    //     event.preventDefault();
    //     baseService.post('/api/verse', { verse: this.state.verse })
    //         // .then(response => { return this.props.history.push(`/api/verse/`) })

    //         .catch(err => {
    //             alert("Error: Your verse was not added");
    //             console.log(err)
    //         });
    // };

    render() {
        return (
            <div>
                <h1 className='grey'>How Do You Feel?</h1>
                <Bubble label="angry" color="secondary" />
                <Bubble label="happy" color="primary" />
                <Bubble><SimpleModal label="stressed" color="secondary"/></Bubble>
                {/* <Link to={'/more'}>
                    <Button
                        variant="outlined"
                    >More Emotions</Button>
                </Link> */}
                {/* <AuthButton /> */}
                {/* <form>
                    <input
                        type="text"
                        placeholder="verse"
                        name="verse"
                        id="verse"
                        onChange={this.inputHandler}
                        defaultValue={this.state.verse}
                    />
                    <button
                        onClick={this.postVerse}
                        id="submit">
                        Add
                    </button>
                </form> */}
                <SimpleModal color="secondary" label="angry" document="anger" />
                <SimpleModal color="primary" label="happy"/>
                {/* <ModalContainer color="secondary" label="angry" document="anger" /> */}
                {/* <Button onClick={this.handleOpen}>Open Modal</Button> */}
            </div>
        )
    }
}

export default Home;