import React from "react";
import './Sobre.css'

const Sobre = () => {
    return (
        <section className="flex section-sobre">
            <div className="subtitulo-paragrafo flex">
                <h2>Lucas Regly</h2>
                <p>Olá 👋, sou um Desenvolvedor Front-End cursando Análise e Desenvolvimento de Sistemas, com expectativa de conclusão em Junho de 2026. Nascido e criado em São João de Meriti - RJ, estou buscando minha primeira oportunidade no mercado de trabalho.</p>
            </div>
            <div className="subtitulo-paragrafo flex">
                <h2>Hard Skills</h2>
                <div className="sobre-imgs flex">
                    <img src="./assets/html-logo.png" alt="" title="HTML 5" />
                    <img src="./assets/css-logo.png" alt="" title="CSS 3"/>
                    <img src="./assets/js-logo.png" alt="" title="JavaScript" />
                    <img src="./assets/react-logo.png" alt="" title="React"/>
                </div>
            </div>
        </section>
    )
}

export default Sobre