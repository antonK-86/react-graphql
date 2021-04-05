import React, { useState } from "react";
import "./AddElementForm.css"
import close from "../assets/img/close.png"
import { useMutation } from '@apollo/client';
import { AddDirector } from "./queries";
import { GetDirectors } from "../directors/DirectorsQuery";

const AddElementForm =(props)=>{

    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    const [addDirector] = useMutation(AddDirector);

    const closeModal = () =>{
        props.openModalAdd(false)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        addDirector({ variables: { name, age:Number(age) }, refetchQueries:[{query:GetDirectors}] }); // refetchQueries - для получения новых данных и их отрисовка
        props.openModalAdd(false)
    }

    return (
        <div className="modal">
            <div className="modal-container">
                <form className="modal-form" onSubmit={handleSubmit}>
                    <div className="modal-form__input-block"><label>Режисер</label>
                    <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/></div>
                    <div className="modal-form__input-block"><label>Возраст</label>
                    <input type="text" placeholder="Age" value={age} onChange={(e)=>setAge(e.target.value)}/></div>
                    <button type="submit" className="pressed-button">Добавить режисера</button>
                </form>
                <div className="close" onClick={closeModal}><img src={close} width="24px" height="24px" alt="img"/></div>
            </div>
        </div>
    )
}

export default AddElementForm;