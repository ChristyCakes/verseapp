import React, { Component } from 'react';
// import * as authorsService from '../../services/authors';
import * as userService from '../../services/user';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
        };
        this.postauthor = this.postauthor.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    };

    inputHandler(event) {
        this.setState({ [event.target.name]: event.target.value });
    };

    postauthor(event) {
        event.preventDefault();
        authorsService.insert({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        })
            .then(() => userService.login(this.state.email, this.state.password))
            .then((meData) => { localStorage.setItem("me", JSON.stringify(meData))})
            .then(() => (this.props.history.push('/admin')))
            .catch(err => {
                alert("Error: Registration Unsuccessful");
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <Nav />
                <h2 className='heading mb-3 marginleft10 center'>Register</h2>
                <form className="center" onSubmit={event => this.postauthor(event)}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Name"
                            className="col-3"
                            name="name"
                            onChange={this.inputHandler}
                            defaultValue={this.state.name}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Email"
                            className="col-3"
                            name="email"
                            onChange={this.inputHandler}
                            defaultValue={this.state.email}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Create a password"
                            className="col-3"
                            name="password"
                            onChange={this.inputHandler}
                            defaultValue={this.state.password}
                            required
                        />
                    </div>
                    <input type="submit" value="Submit" className='btn btn-info btn-sm ml-1' />
                </form>
            </div>
        );
    };
};

export { Register };