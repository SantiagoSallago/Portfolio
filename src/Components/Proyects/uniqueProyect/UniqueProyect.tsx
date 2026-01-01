import "./UniqueProyect.css";
import "./UniqueProyectResponsive.css";
import { useState } from "react";
import ModalProyect from "../../ModalProyect/ModalProyect";
import type { CarouselItem } from "../../types";

type Props = {
    proyect: string;
    image: string;
    link: string;
    description: string;
    fullDescription: string;
    images: CarouselItem[];
};

const UniqueProyect = ({
    proyect,
    image,
    description,
    fullDescription,
    images,
    link
}: Props) => {
    const [modal, setModal] = useState(false);

    return (
        <div className="UniqueProyect">
            <div className="uniqueProyect_Image">
                <img src={image} alt={proyect} />
            </div>

            <h3>{proyect}</h3>
            <p className="p_card">{description}</p>

            <button onClick={() => setModal(true)} className="btnCard">
                Ver proyecto
            </button>

            {modal && (
                <ModalProyect
                    modal={setModal}
                    title={proyect}
                    fullDescription={fullDescription}
                    images={images}
                    link={link}
                />
            )}
        </div>
    );
};

export default UniqueProyect;
