import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app';
import '../style/app.scss';


const Main = () => {

    return <Router>
        <App />
    </Router>
}

let main = document.getElementById("app");
ReactDOM.render(<Main />, main);