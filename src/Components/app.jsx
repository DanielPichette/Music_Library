import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
    constructor(){
        super();
    }
    state = { 
        songLibrary: []
     }
componentDidMount(){
    axios.get('http://127.0.0.1:8000/music/')
    .then(response=>{
        console.log(response.data);
        this.setState({
            songLibrary:response.data
        })
    })
}




    render() { 
        console.log(this.state.songLibrary)
        return ( 
            <h1>Our React App Using a Component</h1>
         );
    }
}
 
export default App;