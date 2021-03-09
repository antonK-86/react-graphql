import React from "react";
import "./Navigation.css"

const Navigation = (props)=>{
    return (
        <div className="nav">
            <button name="movies" className="btn btn-nav" onClick={(e)=>props.onNavChange(e)}>Movies</button>
            <button name="directors" className="btn btn-nav" onClick={(e)=>props.onNavChange(e)}>Directors</button>
        </div>
    )
}

export default Navigation;