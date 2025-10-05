import { useContext } from 'react';
import { CartContext } from '../../cart/cartState';
import { useNavigate, Link } from 'react-router-dom';
import styles from './CartPage.module.css';
import btnStyles from '../../components/Button.module.css';

function CartPage() {
  const { cartItems, clearCart, removeItem } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.discountedPrice, 0);

  function handleCheckout() {
    clearCart();
    navigate('/checkout-success');
  }

  return (
    <div className={`pageContainer ${styles.container}`}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className={styles.emptyCart}>
          <div className={styles.icon}>🛒</div>
          <p>Looks like you haven’t added anything yet.</p>
          <Link
            to="/"
            className={`${btnStyles.button} ${btnStyles.greenButton}`}
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li
                key={index}
                className={`${styles.cartItem} ${
                  cartItems.length === 1 ? styles.singleItem : ''
                }`}
              >
                <img
                  src={item.image?.url}
                  alt={item.image?.alt || item.title}
                />
                <div className={styles.info}>
                  <strong>{item.title}</strong>
                  <span>${item.discountedPrice}</span>
                </div>
                <button
                  className={styles.removeBtn}
                  onClick={() => removeItem(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <p className={styles.total}>Total: ${total.toFixed(2)}</p>

          <div className={styles.actions}>
            <button
              className={`${btnStyles.button} ${btnStyles.greenButton}`}
              onClick={handleCheckout}
            >
              Checkout
            </button>
            <button
              className={`${btnStyles.button} ${btnStyles.dangerButton}`}
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
