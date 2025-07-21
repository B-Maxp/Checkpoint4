import "./Card.css";

function Card({ name, image }: Weapon) {
  return (
    <figure>
      <figcaption>{name}</figcaption>
      <img src={image} alt={`Weapon named ${name}`} />
    </figure>
  );
}

export default Card;
