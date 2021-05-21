import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.songs = [];

        this.state = {
            songNumber: 0
        }
    }

componentDidMount(){
    axios.get('http://127.0.0.1:8000/music/')
    .then(response=>{
        //ßconsole.log(response.data);
        this.setState({
            songLibrary:response.data
        })
        this.songs = response.data
        console.log(this.songs, 'songs')
    })
}




    render() { 
        //console.log(this.state.songLibrary)
        return ( 
            <h1>Our React App Using a Component</h1>
         );
    }
}
 
export default App;