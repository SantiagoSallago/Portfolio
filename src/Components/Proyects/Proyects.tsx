import UniqueProyect from "./uniqueProyect/UniqueProyect";
import "./Proyects.css";
import "./ProyectResponsive.css";

import riff1 from "../../assets/riff_and_rate/image.png";
import riff2 from "../../assets/riff_and_rate/rnr_feed.png";
import riff3 from "../../assets/riff_and_rate/rnr_market.png";

import super1 from "../../assets/supermercado/image1.png";
import super2 from "../../assets/supermercado/image2.png";
import super3 from "../../assets/supermercado/image3.png";

const Proyects = () => {
    return (
        <div className="Proyects">
            <h2>Proyectos</h2>
            <div className="Proyect_Container">
                <UniqueProyect
                    proyect="Riff and Rate"
                    image={riff1}
                    link="https://riffandrate.vercel.app/"
                    description="Riff & Rate es una plataforma social para músicos donde pueden compartir contenido, conectar y publicar servicios. El proyecto está desarrollado con React, NestJS, Node.js, TypeScript y bases de datos SQL/MongoDB, aplicando buenas prácticas, arquitectura modular y trabajo en equipo."
                    fullDescription="Riff & Rate es una aplicación full stack desarrollada como una red social para músicos, construida bajo una arquitectura modular que separa responsabilidades entre frontend y backend. El backend está implementado con Node.js y NestJS, organizado en módulos, controladores y servicios, y expone APIs REST seguras utilizando autenticación y autorización con JWT, validaciones mediante DTOs y manejo centralizado de errores. La persistencia de datos se realiza con MySQL, modelando relaciones entre entidades y garantizando consistencia. El frontend está desarrollado con React y TypeScript, basado en componentes reutilizables, consumo de APIs REST y control de acceso según el estado de autenticación. El proyecto utiliza Git y GitHub para control de versiones, sigue metodología Scrum y está preparado para escalar incorporando nuevas funcionalidades como roles, permisos e interacción entre usuarios."
                    images={[
                        { img: riff1, alt: "Vista principal" },
                        { img: riff2, alt: "Feed" },
                        { img: riff3, alt: "Marketplace" },
                    ]}
                />

                <UniqueProyect
                    proyect="Supermercado"
                    image={super1}
                    link="https://github.com/SantiagoSallago/tp"
                    description="Esta web te permite conocer productos, promociones y novedades desde cualquier dispositivo, combinando simplicidad, claridad y una experiencia de navegación ágil, para que comprar sea siempre fácil y conveniente."
                    fullDescription="Nuestra plataforma digital está diseñada para ofrecer una experiencia de compra simple, rápida y accesible, permitiendo a los clientes explorar productos, consultar precios y encontrar ofertas desde cualquier dispositivo. El sitio presenta un catálogo organizado por categorías, con información clara y actualizada para facilitar la toma de decisiones. La web prioriza la usabilidad, el rendimiento y el diseño responsive, garantizando una navegación fluida tanto en desktop como en mobile. Además, está pensada para adaptarse a las necesidades del supermercado y escalar incorporando nuevas funcionalidades, brindando un canal digital eficiente para conectar el negocio con sus clientes. Fue desarrollado usando HTML5,CSS3 y Javascript"
                    images={[
                        { img: super1, alt: "Home supermercado" },
                        { img: super2, alt: "Home2 supermercado" },
                        { img: super3, alt: "Home3 supermercado" },
                    ]}
                />
            </div>
        </div>
    );
};

export default Proyects;
