import { useState } from "react";
import "./Carrousel.css";

type CarouselItem = {
  img: string;
  alt: string;
};

type Props = {
  items: CarouselItem[];
};

const Carrousel = ({ items }: Props) => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel-item">
        <img src={items[index].img} alt={items[index].alt} />
      </div>

      <button onClick={prev}>‹</button>
      <button onClick={next}>›</button>
    </div>
  );
};

export default Carrousel;
