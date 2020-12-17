import React from "react";
import { Redirect } from "react-router";
import { Component } from "react/cjs/react.production.min";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            userName : "",
            password : ""
        }
    }

    handleUserChange = (e) =>{
        this.setState({
            userName : e.target.value
        })
    }

    handlePasswordChange = (e) =>{
        this.setState({
            password : e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        let hardcoded = {
            userName : "admin@123",
            password : "admin@123"
        }

        if((this.state.userName === hardcoded.userName) && (this.state.password === hardcoded.password)){
            const token = "abcdefgh1234";
            sessionStorage.setItem("auth-token",token);
            <Redirect to='/dashboard'/>
        }
        else    {
            alert ("User name should be admin@123 & password should be admin@123");
        }
    }
    render(){
        return(
            <div className="login-container">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                     type="text"
                     placeholder="username"
                     value={this.state.userName}
                     onChange={this.handleUserChange}/>
                    <input
                     type="password"
                     placeholder="password"
                     value={this.state.password}
                     onChange={this.handlePasswordChange}/>
                    <input
                     type="Submit"
                     /> 
                </form>
            </div>
        )
    }
}

export default Login;