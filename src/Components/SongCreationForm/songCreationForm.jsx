import React, { Component } from 'react';


class AddSong extends Component {
    state = { 
        id:'',
        name: '',
        artist: '',
        album: '',
        genre: '',
        release_date: ''

     }

     handleChange = (event) =>{
         this.setState({
             [event.target.name]: event.target.value
         })
     }

     handleSubmit = (event) =>{
         event.preventDefault();

         const thesong = {
             id: 'tbd',
             title: this.state.title,
             artist: this.state.artist,
             album: this.state.album,
             genre: this.state.genre,
             release_date: this.state.release_date,
         }

         this.props.addSong(thesong);
     };

    render() { 
        return ( 
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div>
                    <label>Song Name</label>
                    <input className="rounded-input" type="text" name="title" onChange={(event) => this.handleChange(event)}></input>
                </div>
                <div>
                    <label>Artist</label>
                    <input className="rounded-input" type="text" name="artist" onChange={(event) => this.handleChange(event)}></input>
                </div>
                <div>
                    <label>Album</label>
                    <input className="rounded-input" type="text" name="album" onChange={(event) => this.handleChange(event)}></input>
                </div>
                <div>
                    <label>Genre</label>
                    <input className="rounded-input" type="text" name="genre" onChange={(event) => this.handleChange(event)}></input>
                </div>
                <div>
                    <label>Release date</label>
                    <input type="text" className="rounded-input" name="release_date" onChange={(event) => this.handleChange(event)}></input>
                </div>
                <button type="submit" >Add Song</button>
            </form>
         );
    }
}
 
export default AddSong;