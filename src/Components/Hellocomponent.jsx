import React, { Component } from 'react';
import  ReactDOM  from 'react-dom';
import './Hellocomponent.css';

class Hellocomponent extends Component{
    render(props){
        return <div className = "Hellocomp">
                <h1>Uttam Prabhudesai {this.props.uname}</h1>
                <p>this is coming from class component</p>
        </div>
    }
}

export default Hellocomponent;