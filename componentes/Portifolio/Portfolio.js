import React from "react";
import './Portfolio.css'
import cardLista from "../ProjetosDados/ProjetosDados";
import Card from "../Card/Card";
const Portfolio = () => {
    return (
        <section className="section-portfolio flex">
            <div className="subtitulo-span flex">
                <h3>Meu <br /> Portfólio</h3>
                <span>esses são alguns projetos que eu fiz.</span>
            </div>
            <div className="cards-container flex">

                {cardLista.map((i) => {
                    return (
                        <Card
                            img={i.src}
                            descricao={i.infos}
                            code={i.repositorio}
                            eye={i.hospedagem}
                        />
                    )
                })

                }
            </div>
        </section>
    )
}

export default Portfolio;