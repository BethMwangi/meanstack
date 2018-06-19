import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './components/App';
import Greetings from './components/Greetings'
import SignupPage from './components/SignupPage'

class Routes extends React.Component {
    render() {

        return (
            <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/greetings'  component ={Greetings} />
            <Route exact path='/signup'  component ={SignupPage} />
</Switch>
        );
    }
}

export default Routes;