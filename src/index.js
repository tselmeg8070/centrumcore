import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Firebase, {FirebaseContext} from './firebase';
import {Provider} from 'react-redux';
import store from './redux/'
ReactDOM.render(
    <Provider store={store}>
        <FirebaseContext.Provider value={new Firebase()}>
            <App />
        </FirebaseContext.Provider>
    </Provider>, document.getElementById('root'));
