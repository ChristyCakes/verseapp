import React, { Component } from 'react';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
// import { AuthButton } from './auth';
import SimpleModal from './simplemodal';

class Home extends Component {
    constructor(props) {
        super(props);
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
                <h1 className='grey center'>How Do You Feel?</h1>
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
                <SimpleModal label="angry" color="primary" document="anger" />
                <SimpleModal label="happy" color="secondary" document="happiness"/>
            </div>
        )
    }
}

export default Home;