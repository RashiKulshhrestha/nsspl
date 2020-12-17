import React from "react";
import { Component } from "react";
import { Redirect } from "react-router";

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state ={
            details : {}
        }
    }
    async componentDidMount(){
        const res = await fetch("https://api.github.com/users");
        const data = await res.json();
        this.setState ({details : data});
        localStorage.setItem("data",JSON.stringify(data));
    }
    handleClick= (e) => {
        <div>{e.login}</div>
        console.log(e.target.value);
    }
    addEmployee = (e) => {
        <Redirect to="/add-employee"/>
    }
    render(){
        return(
            <div>
                <h1>Dashboard</h1>
                <button onClick={this.addEmployee}>Add Employee</button>
                {(JSON.parse(localStorage.getItem("data"))).map((e) => (
                    <tr onClick={this.handleClick} key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.login} </td>
                        <td><img src={e.avatar_url} alt="image" height="50px" width="50px"/></td>
                    </tr>
                ))}
            </div>
        )
    }
}

export default Dashboard;