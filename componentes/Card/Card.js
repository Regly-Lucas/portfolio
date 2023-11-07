import React from "react";
import './Card.css'

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.img} alt="" />
            <div className="card-subcontainer flex">
                <div className="projeto-icons flex">
                    <a target="_blank" href={props.code}><i class="fa-solid fa-code"></i></a>
                    <a target="_blank" href={props.eye}><i class="fa-solid fa-eye"></i></a>
                </div>
                <p>{props.descricao}</p>
            </div>
        </div>

    )
}

export default Card;