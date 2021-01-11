import React, { Component } from 'react';
import  ReactDOM  from 'react-dom';



const Secondhello = ({uname}) => {
    return <div>
                <h1>Uttam Prabhudesai {uname}</h1>
                <p>this is a functional component</p>
        </div>

}

//can also be written as


// const Secondhello = (props) => {
//     return <div>
//                 <h1>Uttam Prabhudesai {props.uname}</h1>
//                 <p>this is a functional component</p>
//         </div>

// }

export default Secondhello;   //only 1 file can be exported in one module



