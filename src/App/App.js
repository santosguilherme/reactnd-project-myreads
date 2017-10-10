import React from 'react';
import {Route} from 'react-router-dom';

import ListBooks from '../ListBooks/ListBooks';
import SearchBooks from '../SearchBooks/SearchBooks';

import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Route
                    exact
                    path="/"
                    component={ListBooks}
                />
                <Route
                    exact
                    path="/search"
                    component={SearchBooks}
                />
            </div>
        )
    }
}

export default App;