import React from "react";
import useSortableData from "../hooks/useSortableData";
import btnEdit from "../assets/img/btnedit.png";

const Directors = (props)=>{
    const data = props.data

    const {sortedItems, requestSort} = useSortableData(data)

    return (
        <div className="content__table-data">
            <table>
                <caption>{props.title}</caption>
                <thead>
                <tr>
                    <th>№</th>
                    <th onClick={() => requestSort("name")}>Режисер</th>
                    <th onClick={() => requestSort('age')}>Возраст</th>
                    <th>Movies</th>
                    <th></th>
                </tr>
                
                </thead>
                <tbody>
                {sortedItems.map((director,index) => (
                    <tr key={director.name}>
                        <td>{index + 1}</td>
                        <td>{director.name}</td>
                        <td>{director.age}</td>
                        <td>movies list</td>
                        <td><img className="btn-edit" src={btnEdit} width="32px" height="32px"/></td>
                    </tr>
                ))} 
                </tbody>
            </table>
            <div className="btn-add">+</div>
        </div>
    )
}

export default Directors;