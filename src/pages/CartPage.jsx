import { useContext } from 'react';
import { CartContext } from '../cart/cartState';
import { useNavigate } from 'react-router-dom';
import styles from './CartPage.module.css';
import btnStyles from '../components/Button.module.css';

function CartPage() {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.discountedPrice, 0);

  function handleCheckout() {
    clearCart();
    navigate('/checkout-success');
  }

  return (
    <div className={styles.container}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className={styles.cartItem}>
                <img
                  src={item.image?.url}
                  alt={item.image?.alt || item.title}
                  style={{
                    width: '60px',
                    height: '60px',
                    objectFit: 'cover',
                    marginRight: '1rem',
                    borderRadius: '4px',
                  }}
                />
                <div>
                  <strong>{item.title}</strong>
                  <span>${item.discountedPrice}</span>
                </div>
              </li>
            ))}
          </ul>

          <p className={styles.total}>Total: ${total.toFixed(2)}</p>

          <button className={btnStyles.greenButton} onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
