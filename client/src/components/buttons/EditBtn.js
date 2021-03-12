import React, { useState } from "react";
import btnEdit from "../assets/img/btnedit.png";
import "./EditBtn.css";

const EditBtn = () => {
  const [isShowPrompt, setIsShowPrompt] = useState(false)
  
  const showPrompt = () => {
    setIsShowPrompt(true)
    setTimeout(()=>setIsShowPrompt(false), 3000)
  }

  return (
    <div className="btn-edit-container">
      <img
        className="btn-edit-container_btn-edit"
        src={btnEdit}
        width="32px"
        height="32px"
        onClick ={showPrompt}
      />
      {isShowPrompt ? (<div className="btn-edit-container__prompt-on-btn prompt-on-btn">
        <div className="prompt-on-btn_mode">Изменить</div>
        <div className="prompt-on-btn_mode">Удалить</div>
      </div>) : null
      }
      
    </div>
  );
};

export default EditBtn;
