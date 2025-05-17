import { Link } from 'react-router-dom';
import styles from './CheckoutSuccessPage.module.css';

function CheckoutSuccessPage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>✅ Order Successful!</h2>
      <p className={styles.message}>Your order has been placed. Thank you!</p>
      <Link to="/" className={styles.link}>
        Back to Store
      </Link>
    </div>
  );
}

export default CheckoutSuccessPage;
