import "./card.css";

export const Card = ({ product }) => {
  const { name, image, price } = product;

  return (
    <div className="productCard">
      <img src={image} alt="" />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>

        <button className="remove">Remove</button>

        <button>Add To Cart</button>
      </div>
    </div>
  );
};
