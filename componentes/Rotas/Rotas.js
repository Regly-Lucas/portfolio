import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Sobre from "../Sobre/Sobre";
import Portfolio from "../Portifolio/Portfolio";
const Rotas = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
        </Routes>
    )
}

export default Rotas