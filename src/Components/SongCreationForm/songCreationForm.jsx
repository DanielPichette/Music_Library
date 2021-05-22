import React from 'react';

class AddSong extends Component {
    state = {  }
    render() { 
        return ( 
            <form class='createSong'>
                <div>
                    <label>Song Name</label>
                    <input type="text" name="name" ></input>
                </div>
                <div>
                    <label>Artist</label>
                    <input type="text" name="artist" ></input>
                </div>
                <div>
                    <label>Album</label>
                    <input type="text" name="album" ></input>
                </div>
                <div>
                    <label>Genre</label>
                    <input type="text" name="genre" ></input>
                </div>
                <div>
                    <label>Release date</label>
                    <input type="text" name="release_date" ></input>
                </div>
                <button type="submit">Add Song</button>
            </form>
         );
    }
}
 
export default AddSong;