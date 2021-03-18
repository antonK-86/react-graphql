import React from "react";
import "./delElement.css"

const DeleteDirector = (props)=>{
    return(
        <div className="del-element-container">
            <div className="del-element-container__content">
                <p>Подтвердите удаление</p>
                <div className="del-element-container__content_btns">
                    <button onClick={()=>props.openDelConfirm(false)}>Отменить</button>
                    <button>Применить</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteDirector;