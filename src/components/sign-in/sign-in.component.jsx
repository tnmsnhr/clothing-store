import React, { Component } from 'react'
import { connect } from 'react-redux';
import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';

export class SignIn extends Component {
    
    state={
        email:'',
        password:''
    }

    handleSubmit=async event=>{
        event.preventDefault()
        this.props.emailSignInStart(this.state.email, this.state.password)
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
                        <CustomButton type='button' click={this.props.googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
                
            </div>
        )
    }
}

const mapDispatchToProps = dispatch=>({
    googleSignInStart: ()=>dispatch(googleSignInStart()),
    emailSignInStart: (email, password)=>dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn)
