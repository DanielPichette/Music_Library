import axios from 'axios';
import React, { Component } from 'react';
import TitleBar from './TileBar/titleBar';
import SongListTable from './Table/Table';

class App extends Component {
    constructor(props) {
        super(props);
        this.songs = [
        {id: '1', title: 'Chanel', artist: 'Frank Ocean', album: 'Chanel', release_date: '2017-03-10'},
        {id: '2', title: "Pretty Please", artist: "Dua Lipa", album: "Future Nostalgia", release_date: "2021-03-27"},
        {id: '3', title: "Fake Mona Lisa", artist: "Carly Rae Jepson", album: "Dedicated Side B", release_date: "2020-05-21"},
        {id: '4', title: "Ocean Drive", artist: "Duke Dumont", album: "Duality", release_date: "2015-07-21"},
        {id: '6', title: "Good 4 you", artist: "Olivia Rodrigo", album: "Good 4 you", release_date: "2021-05-11T"},
        ];
        this.state = {
            songNumber: 0
        }
    }

componentDidMount(){
    axios.get('http://127.0.0.1:8000/music/')
    .then(response=>{
        console.log('has mounted')
        //console.log(response.data);
        //this.setState({
            //songLibrary:response.data
       // })
        //this.songs = response.data
        console.log(this.songs, 'songs')
    });
}



    render() { 
        //console.log(this.songs[1].id)
        return ( 
        <div>
            <TitleBar />
            <h1>Music library project test component</h1>
            <div>
                <SongListTable song={this.songs[this.state.songNumber]}/>
            </div>
        </div>
         );
    }
}
 
export default App;