import React, { useState } from "react"
import Directors from "./directors/Directors"
import "./MainComponent.css"
import Movies from "./movies/Movies"
import Navigation from "./nav/Navigation"
//import {data} from "../data/data"

const data = {
    directors: [
        {
            "name":"Кристофер Нолан",
            "age":56
        },
        {
            "name":"Лав Диас",
            "age":47
        },
        {
            "name":"Джеймс Кэмерон",
            "age":65
        }
    ],
    movies:[
            {
            "name":"Довод",
            "genre":"боевик",
            "directorId":"60473fdc3f57490ea4b0ee62"
            },
            {
            "name":"Бессонница",
            "genre":"триллер",
            "directorId":"60473fdc3f57490ea4b0ee62",
            },
            {
            "name":"Подмена",
            "genre":"драма",
            "directorId":"6047407b3f57490ea4b0ee68"
            },
            {
            "name":"Чудо на гудзоне",
            "genre":"драма",
            "directorId":"6047407b3f57490ea4b0ee68"
            },
            {
            "name":"Снайпер",
            "genre":"боевик",
            "directorId":"6047407b3f57490ea4b0ee68"
            },
    ]
}

const MainComponent = ()=>{
    const [selectContent, setSelectContent] = useState("movies")

    const handleNavSelect =(event)=>{
        //event.preventDefault()
        //console.log(event.target.name);
        setSelectContent(event.target.name)
    }

    return (
        <div className="main-component">
            <div className="container">
                <div className="main-component__header">
                    <Navigation onNavChange={handleNavSelect} selectContent={selectContent}/>
                </div>
                <div className="main-component__content content">
                    {
                        selectContent === "movies" ? <Movies data={data.movies} title="Фильмы"/> : <Directors data={data.directors} title="Режисеры"/>
                    }
                </div>
            </div>
        </div>
    )
}

export default MainComponent;