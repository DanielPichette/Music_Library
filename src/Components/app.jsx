import axios from 'axios';
import React, { Component } from 'react';
import TitleBar from './TileBar/titleBar';
import SongListTable from './Table/Table';
import AddSong from './SongCreationForm/songCreationForm';
import './app.css';

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
                {id: '6', title: "Good 4 you", artist: "Olivia Rodrigo", album: "Good 4 you", genre: 'pop',release_date: "2021-05-11"},
                ],
            searchInput: "",
            filteredSearch: [],
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/music/')
        .then(response=>{
            console.log('has mounted')
            console.log(response.data);
            //this.setState({
            //songs :response.data
            // })
            console.log(this.state.songs, 'songs')
            this.setState({
                filteredSearch: [this.state.songs]
            })

        });
    } 

    addSong(thesong){
        this.setState({
            songs: [...this.state.songs, thesong]
        })
        console.log(this.state.songs, 'updated with new song')
    }


    onChange = event =>{
        let allSongs = this.state.songs
        
        this.setState({
            searchInput: event.target.value,
        });
        let filteredSongs = this.state.songs.filter(song => 
            song.title.includes(this.state.searchInput) ||
            song.artist.includes(this.state.searchInput) ||
            song.album.includes(this.state.searchInput) ||
            song.genre.includes(this.state.searchInput) ||
            song.release_date.includes(this.state.searchInput));
        this.setState({
            filteredSearch: filteredSongs,
        });
        if(this.state.searchInput === "" || this.state.filteredSearch=== []){
            this.setState({
                filteredSearch : allSongs
            });
            

        }
        console.log(this.state.searchInput)
        console.log(this.state.filteredSearch)
    }



    

    render() { 
        //console.log(this.songs[1].id)
        
        
        return ( 
        <div className="App">
            <TitleBar />
            <div className="SearchBar" key="key1">
            <input className="search" type="text" name="searchbar" placeholder="Search..."  onChange={this.onChange}></input>
            </div>
            <div>
                <SongListTable key="key4" songlist={this.state.filteredSearch}  song={this.state.songs[this.state.songNumber]} searchInput={this.state.searchInput}/>
            </div>
            <div className="AddName" key="key2">
                <h2>Add Song</h2>
                <AddSong addSong={(thesong) => this.addSong(thesong)}/>
            </div>
            <div className="test" key="key3">
                {this.state.searchInput}
            </div>
        </div>
         );
    }
}
 
export default App;