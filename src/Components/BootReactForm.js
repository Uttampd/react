import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './BootReactForm.css'

export class BootReactForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            age: '',
            gender: 'Male',
            city: '',
            comments: '',
            chkbox : false,
            chkbox1 : false 
            

        }
        this.handleCityChange = this.handleCityChange.bind(this)
    }

    handleUserNameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleAgeChange = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleGenderChange = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleCityChange = (event) => {
        this.setState({
            city: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.checked
        })
    }

    handleSubmitChange = (event) => {
        alert(`Hello :  ${this.state.username} ,you are ${this.state.age} years old , your gender is ${this.state.gender} , you reside in ${this.state.city} , your hobbies are ${this.state.chkbox} , ${this.state.chkbox1}`)
        event.preventDefault()


    }

    handleChkboxChange = (event) => {
        this.setState({
            chkbox: event.target.value
           
        })
    }

    handleChkbox1Change = (event) => {
        this.setState({
            chkbox1: event.target.value
        })
    }

    resetForm = () => {
        this.setState({
            username: '',
            password: '',
            age: '',
            gender: 'Male',
            city: 'City not selected',
            comments: '',
            chkbox: false,
            chkbox1: false

        })
       

    }

    render() {
        return (
            <div className="  container form-horizontal form-inline">
            <form className="center_div "  onSubmit={this.handleSubmitChange}>

                <br /><br />
                <div className="text-center ">
                <h1><u>USER REGISTRATION FORM</u></h1>
                </div><br /><br />

                <div className="form-group form-inline">
                <label>Username</label>
                <input type="text" value={this.state.username} onChange={this.handleUserNameChange} className="form-control" placeholder="Enter username" required /><br /><br />
                </div>

                <div className="form-group form-inline">
                <label>Password</label>
                <input type="password" value={this.state.password} onChange={this.handlePasswordChange} className="form-control" placeholder="Enter password" required /><br /><br />
                </div>

                <div className="form-group form-inline">
                <label>Age</label>
                <input type="number" value={this.state.age} onChange={this.handleAgeChange} className="form-control" required /><br /><br />
                </div>

                <div className=" form-group radio-inline">
                <label className="col-sm-6">Gender</label>
                <input type="radio" name="gender" value="Male" onChange={this.handleGenderChange} className="form-control" required />Male
                <input type="radio" name="gender" value="Female" onChange={this.handleGenderChange} className="form-control" required />Female<br /><br />
                </div>

                <div className="form-group form-inline">
                <label className="col-sm-6">City</label>
                <select value={this.state.city} onChange={this.handleCityChange} className="form-control" placeholder="Select city" required>
                    <option value="City not selected">Select</option>
                    <option value="Margao">Margao</option>
                    <option value="Panaji">Panaji</option>
                    <option value="Ponda">Ponda</option>
                </select><br /><br />
                </div>

                
                <div className=" form-group checkbox-inline form-check-label">
                <label className="col-sm-6">Hobbies</label>
                <input type="checkbox" name="chkbox" checked={this.chkbox}  onChange={this.handleChkboxChange} value = "painting" className="form-control"  required />Painting
                <input type="checkbox" name="chkbox1" checked={this.chkbox1} onChange={this.handleChkbox1Change} value = "cricket" className="form-control" required />Cricket<br /><br />
                </div>
                

                <div className="form-group ">
                <label className="col-sm-6">Upload a file</label>
                <input type="file" className="col-sm-5"/><br /><br />
                </div>

                <div className="form-group form-inline">
                <label className="col-sm-6">Comments</label>
                <textarea value={this.state.comments} onChange={this.handleCommentsChange} className="form-control" placeholder="Any comments">say something</textarea><br /><br />
                </div>

                
                <div className="form-group form-inline">
                <button type="submit" className="btn btn-success col-md-4 marg ">Submit</button>
                <button type="reset" onClick={this.resetForm} className="btn btn-danger col-md-4 ">Reset</button>
                </div>

                

            </form>
            </div>
        )
    }
}

export default BootReactForm
