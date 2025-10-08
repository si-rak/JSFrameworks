import { useContext } from 'react';
import { CartContext } from '../cart/cartState';
import { Link } from 'react-router-dom';
import styles from './CartIcon.module.css';

function CartIcon() {
  const { cartItems } = useContext(CartContext);

  return (
    <Link to="/cart" className={styles.wrapper} aria-label="Cart">
      <i
        className={`fa-solid fa-cart-shopping ${styles.icon}`}
        style={{
          color: 'var(--text-color)',
          transition: 'color 0.3s ease',
        }}
      ></i>
      {cartItems.length > 0 && (
        <span className={styles.badge}>{cartItems.length}</span>
      )}
    </Link>
  );
}

export default CartIcon;
