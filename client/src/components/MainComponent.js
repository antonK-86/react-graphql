import React from "react"
import "./MainComponent.css"

const MainComponent = ()=>{
    return (
        <div className="main-component">
            <div className="container">
                <div className="main-component__movies">Movies</div>
                <div className="main-component__directors">Directors</div>
            </div>
        </div>
    )
}

export default MainComponent;