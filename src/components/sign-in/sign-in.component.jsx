import React, { Component } from 'react'
import signInWithGoogle from '../../firebase/firebase.util';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';

export class SignIn extends Component {
    
    state={
        email:'',
        password:''
    }

    handleSubmit=event=>{
        event.preventDefault()
        this.setState({email:'',password:''})
    }

    handleChange=event=>{
        const {value,name}=event.target

        this.setState({[name]:value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    
                    <FormInput name='email' value={this.state.email} required type='email' onChange={this.handleChange} label='Email'/>

                    <FormInput name='password' value={this.state.password} required type='password' onChange={this.handleChange} label='Password'/>

                    <div className="button">
                        <CustomButton type='submit' >Sign In</CustomButton>
                        <CustomButton click={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default SignIn
