import React, { Component } from 'react';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
// import { AuthButton } from './auth';
import SimpleModal from './simplemodal';
// let base64 = require('base-64');
import 'isomorphic-fetch';
// import 'es6-promise';

var request = require('request');

let key = '6J2E5Ac8MKyN3O4bCU9ZSUe1ORAwf9oNoK2UIWCC'
let encoded = window.btoa(`${key}: `)

class Home extends Component {
    constructor(props) {
        super(props);
        // this.bibleapi = bibleapi.bind(this)
        this.state = { verse: "" }
    }

    bibleapi() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://bibles.org/v2/verses/eng-NLT:Acts.8.34.js"; // site that doesn’t send Access-Control-*
        fetch(proxyurl + url, {
            headers: new Headers({ 'Authorization': 'Basic ' + window.btoa('6J2E5Ac8MKyN3O4bCU9ZSUe1ORAwf9oNoK2UIWCC' + ':' + 'x') }),
            redirect: "follow",
            // credentials: 'include'
        }) // https://cors-anywhere.herokuapp.com/https://example.com
            .then(response => response.text())
            .then(contents => console.log(contents.verses.text))
            .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    }


    // bibleapi() {
    //     fetch('https://bibles.org/v2/chapters/eng-KJVA:1Cor.2/verses.js?start=5&end=6', {
    //         headers: new Headers({ 'Authorization': 'Basic ' + window.btoa('6J2E5Ac8MKyN3O4bCU9ZSUe1ORAwf9oNoK2UIWCC' + ':' + 'x') }),
    //         redirect: "follow",
    //         credentials: 'include'
    //     })
    //         .then((res) => { console.log(res.json()) })
    // };


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
                <h3>{this.state.verse}</h3>
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
                <SimpleModal label="happy" color="secondary" document="happiness" />
                <button onClick={this.bibleapi}>bible api</button>
            </div>
        )
    }
}

export default Home;