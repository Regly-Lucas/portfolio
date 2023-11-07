import react, { useState } from "react";
import './Cabecalho.css';
import { Link } from "react-router-dom";

const Cabecalho = () => {
    const [estadoBotao, setEstadoBotao] = useState(false);

    function modificandoCabecalhoMobile(){
        setEstadoBotao(!estadoBotao)
    }    
    return (
        <header className="cabecalho">
            <div className="cabecalho-container limita-largura flex">
                <p>  <span>&lt;</span>Lucas Regly<span>/&gt;</span> </p>
                <button onClick={modificandoCabecalhoMobile} className="header-btn">
                {!estadoBotao ? <i class="fa-solid fa-bars"></i> : <i class="fa-solid fa-xmark"></i>}
                </button>
                <nav className="flex nav-cabecalho">
                    <li className="flex">
                        <Link to={'/'}>Home</Link>
                        <Link to={'/sobre'}>Sobre</Link>
                        <Link to={'portfolio'}>Portfólio</Link>
                    </li>
                </nav>
            </div>
            <div className="cabecalho-mobile flex ">
                <nav className={estadoBotao ? 'flex nav-mobile mobile-menu-open' : 'flex nav-mobile mobile-menu-close'}>
                    <li className="flex">
                        <Link to={'/'}>Home</Link>
                        <Link to={'/sobre'}>Sobre</Link>
                        <Link to={'portfolio'}>Portfólio</Link>
                    </li>
                </nav>
            </div>
        </header>
    )
}

export default Cabecalho