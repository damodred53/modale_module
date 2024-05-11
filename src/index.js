import React from "react";
import CrossIcon from "../assets/cross.png";
import "../style/modal.css";
import { useRef } from "react";

const Modal = () => {

    

    const textContent = "Employee Created!";

    const handleClosure = (event) => {
        if (event.target === modalRef.current) {
          const modalToClose = document.querySelector('.modal');
          modalToClose.style.display = "none";
        }
    }

    const handleClosureCross = () => {
      const modalToClose = document.querySelector('.modal');
      modalToClose.style.display = "none";
    }

    const modalRef = useRef()

    return (

        <section className="modal" ref={modalRef} onClick={handleClosure}>
            <div className="modal_div">
                <p className="modal_div_paragraph">{textContent}</p>
                <img onClick={handleClosureCross} className="modal_div_cross" src={CrossIcon} alt="cross icon"/>
            </div>
        </section>
    )
}

export default Modal;
