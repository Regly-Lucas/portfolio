import React from "react";
import './Home.css'
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className="home-main-container limita-largura flex">
            <div className="home-sub-container">
                <h1>Olá Mundo,<br /><span>Eu sou um <br /> Desenvolvedor Web,</span><br />bem-vindo ao meu portfólio!</h1>
                <Link className="more-btn" to={'/sobre'}>Mais sobre mim</Link>
                <div className="home-sub-container-icons flex">
                    <a className="github" target="_blank" href="https://github.com/Regly-Lucas"><i class="fa-brands fa-github"></i></a>
                    <a className="in" target="_blank" href="https://www.linkedin.com/in/lucas-regly-marchitto-538919274/"><i class="fa-brands fa-linkedin"></i></a>
                    <a className="wpp" target="_blank" href="https://wa.me/5521986236140"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
            </div>
            <img className="regly-foto" src="./assets/foto-lucas.jpg" alt="Lucas Regly Foto" title="Lucas Regly Foto" />
        </div>
    )
}

export default Home