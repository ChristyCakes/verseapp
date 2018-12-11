import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Bubble from './bubble'
// import cyan from '@material-ui/core/colors/cyan';
// const cyan400 = cyan['A400'];
import Button from '@material-ui/core/Button';
// import { AuthButton } from './auth';
import * as baseService from '../services/base';
// import Modal from '@material-ui/core/Modal';
// import PropTypes from 'prop-types';
import SimpleModal from './simplemodal'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            verses: "",
            // open: false
        }
        this.postVerse = this.postVerse.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
        // this.handleOpen = this.handleOpen.bind(this);
        // this.handleClose = this.handleClose.bind(this);
    }


    // handleOpen = () => { this.setState({ open: true }) };
    // handleClose = () => { this.setState({ open: false }) };
    inputHandler(event) { this.setState({ [event.target.name]: event.target.value }) };

    postVerse(event) {
        event.preventDefault();
        baseService.post('/api/verse', { verse: this.state.verse })
            // .then(response => { return this.props.history.push(`/api/verse/`) })

            .catch(err => {
                alert("Error: Your verse was not added");
                console.log(err)
            });
    };

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
                <form>
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
                </form>
                <SimpleModal color="secondary" label="angry"/>
                <SimpleModal color="primary" label="happy"/>
                {/* <Button onClick={this.handleOpen}>Open Modal</Button> */}
                {/* <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >Modal
                </Modal>
                <SimpleModalWrapped /> */}
            </div>
        )
    }
}

// SimpleModal.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };
  
//   // We need an intermediary variable for handling the recursive nesting.
//   const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default Home;