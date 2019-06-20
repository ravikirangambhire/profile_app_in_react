import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar'
import './css/bootstrap.min.css';
import './css/main.css';

//youtube key :AIzaSyCFYph09uC44w5b0PM1X8nLwjueMkGWIWQ
const API_KEY='AIzaSyCFYph09uC44w5b0PM1X8nLwjueMkGWIWQ';
//create new component.Component should produce some html 
//this is JSX code
const App=() => {

    return (
        <div>
             <SearchBar/>
        </div>
    );
}

//Take this component's generated HTML and put it.
//on page (in the DOM)
ReactDom.render(<App />, document.querySelector('.container'));//here we have to mention app name(APP) and surrounded by JSX tags. by doing that we are instantiating it.