import React, { useState } from "react";
import "./AddElementForm.css"
import close from "../assets/img/close.png"
import { useMutation } from '@apollo/client';
import { AddMovie } from "./queries";
import { GetMovies } from "../movies/MoviesQuery";

const AddMovieForm =(props)=>{

    const [name, setName] = useState("")
    const [genre, setAge] = useState("")

    const [addMovie, { data }] = useMutation(AddMovie);

    const closeModal = () =>{
        props.openModalAdd(false)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        addMovie({ variables: { name, genre }, refetchQueries:[{query:GetMovies}] }); // refetchQueries - для получения новых данных и их отрисовка
        props.openModalAdd(false)
    }

    return (
        <div className="modal">
            <div className="modal-container">
                <form className="modal-form" onSubmit={handleSubmit}>
                    <div className="modal-form__input-block"><label>Name</label>
                    <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/></div>
                    <div className="modal-form__input-block"><label>Genre</label>
                    <input type="text" placeholder="Genre" value={genre} onChange={(e)=>setAge(e.target.value)}/></div> 
                    <button type="submit" className="pressed-button">Add movie</button>
                </form>
                <div className="close" onClick={closeModal}><img src={close} width="24px" height="24px"/></div>
            </div>
        </div>
    )
}

export default AddMovieForm;

