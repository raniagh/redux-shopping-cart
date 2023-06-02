import { useSelector } from "react-redux";
import { CartItem } from "../components/CartItem";
import { useTitle } from "../hooks/useTitle";

export const Cart = () => {
  useTitle("Cart");
  const products = useSelector((state) => state.cartSate.cartList);
  const total = useSelector((state) => state.cartSate.total);

  return (
    <main>
      <section className="cart">
        <h1>
          Cart Items: {products.length} / ${total}
        </h1>
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
