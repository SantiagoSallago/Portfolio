import "./ModalProyect.css";
import "./ModalProyectResponsive.css";
import Carrousel from "./Carrousel/Carrousel";

type CarouselItem = {
  img: string;
  alt: string;
};

type Props = {
  modal: React.Dispatch<React.SetStateAction<boolean>>;
  fullDescription: string;
  title: string;
  images: CarouselItem[];
  link:string;
};

const ModalProyect = (props: Props) => {
  return (
    <div className="modal-proyect">
      <div className="modalProyectImage">
        <Carrousel items={props.images} />
      </div>

      <div className="modalProyectText">
        <button
          className="close-button"
          onClick={() => props.modal(false)}
        >
          X
        </button>

        <div className="proyectModalContent">
          <h3>{props.title}</h3>
          <p>{props.fullDescription}</p>
        </div>
          <a href={props.link} className="link-modal">Ver Proyecto</a>
      </div>
    </div>
  );
};

export default ModalProyect;
