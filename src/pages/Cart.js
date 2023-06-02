import { CartItem } from "../components/CartItem";
import { useTitle } from "../hooks/useTitle";

export const Cart = () => {
  useTitle("Cart");
  const products = [];

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: 0 / $0</h1>
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
