import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import  { firebase, firebaseApp } from './firebase';
import { logUser } from './actions';
import reducer from './reducers';
import App from './components/App';
import Signin from './components/Signin';
import SignUp from './components/SignUp';

const store = createStore(reducer);


firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        //console.log('user has signed in or up', user);
        const { email } = user;
        store.dispatch(logUser(email));
        browserHistory.push('/app');
    } else {
        //console.log('user has not signed out or need to sign in')
        browserHistory.replace('/signin');
    }
})

ReactDOM.render(
    <Provider store={store}>
        <Router path="/" history={browserHistory}>
        <Route path="/app" component={App} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={SignUp} />

    </Router>

    </Provider>, document.getElementById('root')

)

