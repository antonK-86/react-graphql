import React, { useMemo, useState } from "react";
import "./TableData.css";

const TableData = (props)=>{
  //console.log("table");
  const [sortConfig, setSortConfig] = useState(null);// хук для сортировки

  const data = props.data
  
  const sortedColMemo = useMemo(()=>{
      const sortedCol = [...data] //копия с данными movies
      
      // определяем правила сортировки
      if (sortConfig !== null) {
        sortedCol.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? 1 : -1;
          }
          return 0;
        });
      }
      return sortedCol;
    },[data,sortConfig])
  
  //ф-ия добавляет в state данные key и direction (имя поля и направления сортировки) 
  const requestSort = key => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  }

  return (
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
      {sortedColMemo.map(movie => (
        <tr key={movie.name}>
          <td>{movie.name}</td>
          <td>{movie.genre}</td>
          <td>{movie.directorId}</td>
        </tr>
      ))} 
    </tbody>
  </table>
  )
}

// const TableData = (props)=>{
//     //console.log("df");
//     const [sortConfig, setSortConfig] = useState(null);// хук для сортировки

//     const data = props.data
//     const sortedCol = [...data] //копия с данными movies

//     console.log(sortConfig);
//     // определяем правила сортировки
//     if (sortConfig !== null) {
//       sortedCol.sort((a, b) => {
//         if (a[sortConfig.key] < b[sortConfig.key]) {
//           return sortConfig.direction === "ascending" ? -1 : 1;
//         }
//         if (a[sortConfig.key] > b[sortConfig.key]) {
//           return sortConfig.direction === "ascending" ? 1 : -1;
//         }
//         return 0;
//       });
//     }

//     //ф-ия добавляет в state данные key и direction (имя поля и направления сортировки) 
//     const requestSort = key => {
//       let direction = 'ascending';
//       if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
//         direction = 'descending';
//       }
//       setSortConfig({ key, direction });
//     }

//     return (
//     <table>
//       <caption>{props.title}</caption>
//       <thead>
//         <tr>
//           <th onClick={() => requestSort("name")}>Название</th>
//           <th onClick={() => requestSort('genre')}>Жанр</th>
//           <th onClick={() => requestSort('directorId')}>Режисер</th>
//         </tr>
//       </thead>
//       <tbody>
//         {sortedCol.map(movie => (
//           <tr key={movie.name}>
//             <td>{movie.name}</td>
//             <td>{movie.genre}</td>
//             <td>{movie.directorId}</td>
//           </tr>
//         ))} 
//       </tbody>
//     </table>
//     )
// }

export default TableData;