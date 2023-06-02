import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";
import "./card.css";
import { useEffect, useState } from "react";

export const Card = ({ product }) => {
  const dispatch = useDispatch();
  const { id, name, image, price } = product;
  const [isInCart, setIsInCart] = useState(false);

  const products = useSelector((state) => state.cartSate.cartList);

  useEffect(() => {
    const productInCart = products.find((cartItem) => cartItem.id === id);
    if (productInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [products, id]);

  return (
    <div className="productCard">
      <img src={image} alt="" />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart ? (
          <button onClick={() => dispatch(remove(product))} className="remove">
            Remove
          </button>
        ) : (
          <button onClick={() => dispatch(add(product))}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};
