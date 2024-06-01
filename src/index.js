import React from "react";
import CrossIcon from "../assets/cross.png";
import "../style/modal.css";
import { useRef} from "react";

const Modal = ({textContent = "employee Created !!", width = "50%", height = "10%"}) => {

    // fonction permettant de fermer la modale en cliquant hors du champ texte
    const handleClosure = (event) => {
        if (event.target === modalRef.current) {
          const modalToClose = document.querySelector('.modal');
          modalToClose.style.display = "none";
          setIsModalOpen(false)
        }
    }

    // fonction permettant de fermer la modale en cliquant sur la croix
    const handleClosureCross = () => {
        const modalToClose = document.querySelector('.modal');
        modalToClose.style.display = "none";
        setIsModalOpen(false)
    }

    const modalRef = useRef()

    return (
        <section className="modal" ref={modalRef} onClick={handleClosure}>
            <div className="modal_div" style={{ width, height }}>
                <p className="modal_div_paragraph">{textContent}</p>
                <img onClick={handleClosureCross} className="modal_div_cross" src={CrossIcon} alt="cross icon"/>
            </div>
        </section>
    )
}

export default Modal;
