import React from "react";
import "./Navigation.css"

const Navigation = (props)=>{
    return (
        <div className="nav">
            <button name="movies" className={`btn btn-nav ${props.selectContent === "movies" ? "btn-nav-active" : ""}`} onClick={(e)=>props.onNavChange(e)}>Movies</button>
            <button name="directors" className={`btn btn-nav ${props.selectContent === "directors" ? "btn-nav-active" : ""}`} onClick={(e)=>props.onNavChange(e)}>Directors</button>
        </div>
    )
}

export default Navigation;