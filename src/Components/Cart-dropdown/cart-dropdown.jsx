import { useContext } from "react";

import CartItem from "./cart-items/cart-item";
import { CartContext } from "../../contexts/cart.context";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} CartItem={item} />
        ))}
      </div>
      <button className="btn btn-light">Go to Cart</button>
    </div>
  );
};

export default CartDropdown;
