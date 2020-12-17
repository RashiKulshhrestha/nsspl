import {Component,React }from "react";

export default class AddEmployee extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            url : ""
        }
    }
    handleNameChange = (e) => {
        this.setState({
            name : e.target.value
        })
    }
    handleImgChange = (e) => {
        this.setState({
            url : e.target.value
        })
    }
    handleSubmit = () =>{
        let add_data  = {name: this.state.name,
                     url: this.state.url   }
        let get_data = JSON.parse(localStorage.getItem("data"));
        get_data.push(add_data);
        localStorage.setItem("data",JSON.stringify(get_data));
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleNameChange} value={this.state.name}
                    placeholder="Employee Name"    />
                    <input type = "text" onChange={this.handleImgChange} value = {this.state.url}
                        placeholder="image URL"/>
                </form>
            </div>
        )
    }
}