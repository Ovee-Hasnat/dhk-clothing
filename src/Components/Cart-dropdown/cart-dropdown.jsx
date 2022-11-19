import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import CartItem from "./cart-items/cart-item";
import { CartContext } from "../../contexts/cart.context";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} CartItem={item} />
        ))}
      </div>
      <button className="btn btn-light" onClick={() => navigate("/checkout")}>
        Go to Cart
      </button>
    </div>
  );
};

export default CartDropdown;
