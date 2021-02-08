import React, {Component} from 'react';
import { connect } from 'react-redux';
import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>Test React Connection</div>
        )
    }
}

export default connect(App);