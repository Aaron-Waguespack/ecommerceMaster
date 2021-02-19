import React, {Component} from 'react';
import CustomButton from '../custom-button/custom-button.component.jsx';
import FormInput from '../form-input/form-input.component.jsx';
import './sign-in.styles.scss';

import {auth, signInWithGoogle} from '../../firebase/firebase.utilites.jsx';

class SignIn extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
        }
    }

    handleSubmit = async(event) => {
        event.preventDefault();
        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'', password:''});

        } catch (error) {
            console.log(error)
        }
    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your Email and Password</span>
             <form onSubmit={this.handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    handleChange = {this.handleChange}
                    label='email'
                    value={this.state.email}
                    required
                />
                <FormInput
                    name="password"
                    type="password"
                    handleChange  = {this.handleChange}
                    value={this.state.password}
                    label ="password"
                    required
                />
                <div className='buttons'>
                    <CustomButton type="submit">Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        {" "}
                            Sign in with Google
                        {" "}
                    </CustomButton>
                </div>
                </form>
            </div>
        )
    }
};

export default SignIn;