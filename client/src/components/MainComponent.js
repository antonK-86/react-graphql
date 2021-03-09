import React, { useState } from "react"
import Directors from "./directors/Directors"
import "./MainComponent.css"
import Movies from "./movies/Movies"
import Navigation from "./nav/Navigation"

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
                    <Navigation onNavChange={handleNavSelect}/>
                </div>
                <div className="main-component__content content">
                    {
                        selectContent === "movies" ? <Movies/> : <Directors/>
                    }
                </div>
            </div>
        </div>
    )
}

export default MainComponent;