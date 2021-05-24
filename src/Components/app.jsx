import axios from 'axios';
import React, { Component } from 'react';
import TitleBar from './TileBar/titleBar';
import SongListTable from './Table/Table';
import AddSong from './SongCreationForm/songCreationForm';
import Searchbar from './SearchBar/searchbar';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            songNumber: 0,
            songs: [
                {id: '1', title: 'Chanel', artist: 'Frank Ocean', album: 'Chanel', genre: 'r&b', release_date: '2017-03-10'},
                {id: '2', title: "Pretty Please", artist: "Dua Lipa", album: "Future Nostalgia", genre: 'pop',release_date: "2021-03-27"},
                {id: '3', title: "Fake Mona Lisa", artist: "Carly Rae Jepson", album: "Dedicated Side B", genre: 'pop',release_date: "2020-05-21"},
                {id: '4', title: "Ocean Drive", artist: "Duke Dumont", album: "Duality", genre: 'indie pop',release_date: "2015-07-21"},
                {id: '6', title: "Good 4 you", artist: "Olivia Rodrigo", album: "Good 4 you", genre: 'pop',release_date: "2021-05-11T"},
                ],
            searchInput: ""
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
            console.log(this.state.songs, 'songs')

        });
    } 

    addSong(thesong){
        this.setState({
            songs: [...this.state.songs, thesong]
        })
        console.log(this.state.songs, 'updated with new song')
    }

    onChange = event =>{
        this.setState({
            searchInput: event.target.value
        });
        console.log(this.state.searchInput)
    }



    render() { 
        //console.log(this.songs[1].id)
        return ( 
        <div className="App">
            <TitleBar />
            <div>
            <input type="text" name="searchbar" placeholder="Search..."  onChange={this.onChange}></input>
            </div>
            <div>
                <SongListTable songlist={this.state.songs}  song={this.state.songs[this.state.songNumber]}/>
            </div>
            <div>
                <h2>Add Song</h2>
                <AddSong addSong={(thesong) => this.addSong(thesong)}/>
            </div>
        </div>
         );
    }
}
 
export default App;