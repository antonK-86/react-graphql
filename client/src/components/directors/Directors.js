import React from "react";
import useSortableData from "../hooks/useSortableData";

const Directors = (props)=>{
    const data = props.data

    const {sortedItems, requestSort} = useSortableData(data)

    return (
        <div className="content__table-data">
            <table>
                <caption>{props.title}</caption>
                <thead>
                <tr>
                    <th onClick={() => requestSort("name")}>Режисер</th>
                    <th onClick={() => requestSort('age')}>Возраст</th>
                </tr>
                </thead>
                <tbody>
                {sortedItems.map(director => (
                    <tr key={director.name}>
                        <td>{director.name}</td>
                        <td>{director.age}</td>
                    </tr>
                ))} 
                </tbody>
            </table>
        </div>
    )
}

export default Directors;