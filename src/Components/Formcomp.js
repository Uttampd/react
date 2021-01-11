import React, { Component } from 'react'
import './Formcomp.css'

class Formcomp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username :'',
            password : '',
            age : '',
            gender : 'Male',
            city : '',
            comments : ''

        }
    }

    handleUserNameChange = (event) => {
        this.setState ({
            username : event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState ({
            password: event.target.value
        })
    }

    handleAgeChange = (event) => {
        this.setState ({
            age : event.target.value
        })
    }

    handleGenderChange = (event) => {
        this.setState ({
            gender : event.target.value
        })
    }

    handleCityChange = (event) => {
        this.setState ({
            city : event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState ({
            comments : event.target.value
        })
    }

    handleSubmitChange = (event) => {
            alert (`you have entered :  ${this.state.username} , ${this.state.age} , ${this.state.gender} , ${this.state.city} ,${this.state.chkbox} , ${this.state.chkbox1}`)
            event.preventDefault()
            
    
    }

    handleChkboxChange = (event) => {
        this.setState ({
            chkbox : event.target.value
        })
    }

    handleChkbox1Change = (event) => {
        this.setState ({
            chkbox1 : event.target.value
        })
    }

    resetForm = () => {
        this.setState({
            username :'',
            password : '',
            age : '',
            gender : 'Male',
            city : 'City not selected',
            comments : '',
            chkbox : 'false',
            chkbox1 : 'false'

        })
        this.handleCityChange = this.handleCityChange.bind(this)

    }

    render() {
        return (
            <form onSubmit = {this.handleSubmitChange}>

                <br/><br/>

                <h1><u>USER REGISTRATION FORM</u></h1>


                <label>Username</label>
                <input type="text" value = {this.state.username} onChange = {this.handleUserNameChange} placeholder = "Enter username" required/><br/><br/>

                <label>Password</label>
                <input type="password" value = {this.state.password} onChange = {this.handlePasswordChange} placeholder = "Enter password" required/><br/><br/>

                <label>Age</label>
                <input type="number" value = {this.state.age} onChange = {this.handleAgeChange} required/><br/><br/>


                <label>Gender</label>
                <input type="radio" name = "gender"  value = "Male" onChange = {this.handleGenderChange} required/>Male
                <input type="radio" name = "gender"  value = "Female" onChange = {this.handleGenderChange} required/>Female<br/><br/>

                <label>City</label>
                <select value = {this.state.city} onChange = {this.handleCityChange} placeholder = "Select city" required>
                    <option value ="City not selected">Select</option>
                    <option value ="Margao">Margao</option>
                    <option value ="Panaji">Panaji</option>
                    <option value ="Ponda">Ponda</option>
                </select><br/><br/>

                <label>Hobbies</label>
                <input type="checkbox" name = "chkbox" checked = {this.state.chkbox} onChange = {this.handleChkboxChange} required/>Painting
                <input type="checkbox" name = "chkbox1" checked = {this.state.chkbox1} onChange = {this.handleChkbox1Change} required/>Cricket<br/><br/>

                <label>Upload a file</label>
                <input type="file"/><br/><br/>

                <label>Comments</label>
                <textarea value = {this.state.comments} onChange = {this.handleCommentsChange} placeholder = "Any comments">say something</textarea><br/><br/>

                <button type ="submit">Submit</button>
                <button type ="reset" onClick = "resetForm">Reset</button>

            </form>


        )
    }
}

export default Formcomp
