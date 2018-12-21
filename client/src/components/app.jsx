import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeWrapped from './home';
import '../styles.css';

class App extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={HomeWrapped} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default App;