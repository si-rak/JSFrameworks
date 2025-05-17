import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

function HomePage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://v2.api.noroff.dev/online-shop');
        const json = await response.json();
        setProducts(json.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>All Products</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.search}
      />

      <div className={styles.grid}>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <Link
              to={`/product/${product.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className={styles.card}>
                <img src={product.image.url} alt={product.image.alt} />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <strong>Price: ${product.discountedPrice}</strong>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
