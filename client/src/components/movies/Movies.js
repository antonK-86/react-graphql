import React from "react";
import useSortableData from "../hooks/useSortableData";


const Movies = (props)=>{
    const data = props.data

    const {sortedItems, requestSort} = useSortableData(data)
    return (
        <div className="content__table-data">
            <table>
                <caption>{props.title}</caption>
                <thead>
                <tr>
                    <th onClick={() => requestSort("name")}>Название</th>
                    <th onClick={() => requestSort('genre')}>Жанр</th>
                    <th onClick={() => requestSort('directorId')}>Режисер</th>
                </tr>
                </thead>
                <tbody>
                {sortedItems.map(movie => (
                    <tr key={movie.name}>
                    <td>{movie.name}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.directorId}</td>
                    </tr>
                ))} 
                </tbody>
            </table>
        </div>
    )
}

export default Movies;
 