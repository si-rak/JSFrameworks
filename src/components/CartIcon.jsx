import { useContext } from 'react';
import { CartContext } from '../cart/cartState';
import { Link } from 'react-router-dom';

function CartIcon() {
  const { cartItems } = useContext(CartContext);

  return (
    <Link to="/cart" style={styles.wrapper}>
      <i
        className="fa-solid fa-cart-shopping"
        style={{ fontSize: '1.3rem', color: '#333' }}
      ></i>

      <span style={styles.badge}>{cartItems.length}</span>
    </Link>
  );
}

const styles = {
  wrapper: {
    position: 'relative',
    fontSize: '1.5rem',
    textDecoration: 'none',
    color: '#000',
    marginLeft: 'auto',
  },
  badge: {
    position: 'absolute',
    top: '-8px',
    right: '-12px',
    background: '#3498db',
    color: '#fff',
    borderRadius: '50%',
    fontSize: '0.75rem',
    padding: '2px 6px',
    fontWeight: 'bold',
  },
};

export default CartIcon;
