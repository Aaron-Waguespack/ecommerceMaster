import React, {Component} from 'react';
import './App.scss'
import HomePage from '../../components/homepage/homepage.js';



class App extends Component {
    constructor(props){
        super(props);
    }
        render(){
            return (
                <div>
                    <HomePage/>
                </div>
            )
        }
}

export default App;