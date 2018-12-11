import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Admin } from './admin'
import Home from './home';
// import { PrivateRoute, Login, Logout, Register } from './auth';
import '../styles.css';

class App extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        {/* <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} /> */}
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default App;