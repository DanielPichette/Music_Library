import React from 'react'
import './Table.css';


function SongListTable(props) {
    
    return (
        <table id="SongListTable" className="styled-table">
        <thead>
        {/* <tr>
            <th>Current Music List</th>
        </tr> */}
        </thead>
        <thead>
        <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th></th>

            
        </tr>
        </thead>
        <tbody>
            {
            props.songlist.map((song)=> {
                return (
                <tr>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>{song.album}</td>
                    <td>{song.genre}</td>
                    <td>{song.release_date}</td>
                    <td><button type='submit' >Delete</button></td>
                </tr>
                )}
            )}
        </tbody>
        <tfoot></tfoot>
    </table>
    );
}
export default SongListTable;