import React from 'react';
import pic1 from './sarra.jpg'
import pic2 from './harold.jpg'
import pic3 from './daniel.jpg'

export default class Check extends React.Component{
    state={
        name : "Sarra",
        photo : pic1,
        description : "Hey I am Sarra"
    }
    
    render(){
        return ( 
            <div>
            <button onClick={()=>this.setState({name : "Sarra", photo : pic1, description : "Hey I am sarra"})}>Sarra</button>
            <button onClick={()=>this.setState({name : "Harold", photo : pic2, description : "Hey I am harold"})}>Harold</button>
            <button onClick={()=>this.setState({name : "Daniel", photo : pic3, description : "Hey I am daniel"})}>Daniel</button>
            <h1>{this.state.name}</h1>
            <img src = {this.state.photo} alt=""></img>
            <p>{this.state.description}</p>
            
            </div>
            
        )
    }
}