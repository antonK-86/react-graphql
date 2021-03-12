import React, { useState } from "react";
import "./AddMovie.css"
import close from "../assets/img/close.png"

const AddMovie =(props)=>{
    
    const closeModal = () =>{
        props.openModalAdd(false)
    }

    return (
        <div className="modal">
            <div className="modal-container">
                <div className="modal-form">
                    <div className="modal-form__input-block">   <label>Name</label>
                    <input type="text" placeholder="Name"/></div>
                    <div className="modal-form__input-block"><label>Genre</label>
                    <input type="text" placeholder="Genre"/></div>
                    <div className="modal-form__input-block"> <label>DirectorId</label>
                    <input type="text" placeholder="DirectorID"/></div>
                </div>
                <button className="pressed-button">Add movie</button>
                <div className="close" onClick={closeModal}><img src={close} width="24px" height="24px"/></div>
            </div>
        </div>
    )
}

export default AddMovie;