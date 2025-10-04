import { Link } from 'react-router-dom';
import styles from './CheckoutSuccessPage.module.css';
import btnStyles from '../../components/Button.module.css';

function CheckoutSuccessPage() {
  return (
    <div className={`pageContainer ${styles.container}`}>
      <h2 className={styles.title}>✅ Order Successful!</h2>
      <p className={styles.message}>Your order has been placed. Thank you!</p>
      <Link to="/" className={`${btnStyles.button} ${btnStyles.blueButton}`}>
        Back to Store
      </Link>
    </div>
  );
}

export default CheckoutSuccessPage;
