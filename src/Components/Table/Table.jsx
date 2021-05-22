import React from 'react'

function SongListTable(props) {

    return (
        <table id="SongListTable">
        <thead>
        <tr>
            <th>Current Music List</th>
        </tr>
        </thead>
        <thead>
        <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Release Date</th>
        </tr>
        </thead>
        <tbody>
            {props.songlist.map((song)=> {
                return (
                <tr>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>{song.album}</td>
                    <td>{song.release_date}</td>
                </tr>
                )}
            )}
        </tbody>
        <tfoot></tfoot>
    </table>
    );
}
export default SongListTable;