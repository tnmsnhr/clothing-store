import React, { Component } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.util';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-up.styles.scss';

export class SignUp extends Component {

    state={
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    }

    handleSubmit= async event=>{
        event.preventDefault();

        const {displayName,email,password,confirmPassword}=this.state;

        if(password != confirmPassword){
            alert('password doesn\'t match')
            return;
        }

        try{

            const {user}=auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName})
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })

        }catch(err){
            console.log(err.message)
        }
    }

    handleChange=event=>{
        const {name,value}=event.target
        this.setState({[name]:value})
    }

    render() {
        console.log(this.state)
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with email and password</span>

                <form className="sign-up-form" onSubmit={this.handleSubmit}>

                    <FormInput 
                        type='text'
                        name='displayName'
                        value={this.state.displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />

                    <FormInput 
                        type='email'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />

                    <FormInput 
                        type='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />

                    <FormInput 
                        type='password'
                        name='confirmPassword'
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />

                    <CustomButton type="submit">SIGN UP</CustomButton>

                </form>
            </div>
        )
    }
}

export default SignUp
