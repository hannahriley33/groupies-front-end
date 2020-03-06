import React, { Component } from 'react'
import request from 'superagent'
// import { Link } from 'react-router-dom'

import './SignIn.css'

export default class SignIn extends Component {

    state = {
        usernameSignIn: '',
        passwordSignIn: '',
        isSignUp: false
        
    }

    handleSignIn = async (e) => {
        try {
        e.preventDefault();
        
        const signIn = await request.post(`https://vast-ravine-67223.herokuapp.com/api/auth/signin`, {
            email: this.state.usernameSignIn,
            password: this.state.passwordSignIn,
        })
        alert('you are now logged in');
        localStorage.setItem('user', JSON.stringify(signIn.body));
        this.props.history.push('/concerts');
    } catch  {
        alert('You need to create a user account')

    }
    }


    render() {
        return (    
            <div className="signin-container">
                <form className="signin-form" onSubmit={this.handleSignIn}>
                    <input type="text" value={ this.state.usernameSignIn} onChange={(e) => this.setState({ usernameSignIn: e.target.value})} placeholder="Email"/>
                    <br/>
                    <input type="password" value={ this.state.passwordSignIn} onChange={(e) => this.setState({ passwordSignIn: e.target.value})} placeholder="Password"/>
                
                    <br/>   
                    <button type="submit">Sign In</button> 
                </form>    
                
            </div>
        )
    }
}