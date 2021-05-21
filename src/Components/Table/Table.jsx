import React from 'react'

function SongListTable(props) {
    return (
        <table>
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
        <tr>
            <td>{props.song.title}</td>
            <td>{props.song.artist}</td>
            <td>{props.song.album}</td>
            <td>{props.song.release_date}</td>
        </tr>
        </tbody>
        <tfoot></tfoot>
    </table>
    );
}
export default SongListTable;