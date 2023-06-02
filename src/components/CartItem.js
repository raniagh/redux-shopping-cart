import { useDispatch } from "react-redux";
import "./cartItem.css";
import { remove } from "../store/cartSlice";
export const CartItem = ({ product }) => {
  const { name, image, price } = product;
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(remove(product));
  };
  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};
