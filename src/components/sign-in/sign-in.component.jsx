import React, {Component} from 'react';

class SignIn extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
        }
    }

    render() {
        return (
            <div className='sign-in'>
                <h2></h2>
            </div>
        )
    }
};


export default SignIn;