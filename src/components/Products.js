import React, { useState, useEffect } from 'react';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    fetchProducts();
  }, [sortOption]);

  const fetchProducts = () => {
    let url = 'http://localhost:5000/api/products';

    if (sortOption) {
      url += `?sortBy=${sortOption}`;
    }

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched products:', data);
        setProducts(data);
      })
      .catch((error) => console.error('Error fetching products:', error.message));
  };

  const handleSortButtonClick = () => {
    fetchProducts();
  };

  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <div>
      <h2 id='shop'>Shop Now</h2>
      <div className="sort-container">
        {/* Sort button */}
        <button id='button' onClick={handleSortButtonClick}>FILTER</button>
        {/* Dropdown menu for sorting */}
        <select value={sortOption} onChange={handleSortOptionChange}>
          <option value="">Sort by</option>
          <option value="priceDesc">Highest Price to Lowest Price</option>
          <option value="priceAsc">Lowest Price to Highest Price</option>
        </select>
      </div>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.product_id} className="product-box">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <strong className="product-name">{product.name}</strong>
              <p className="product-description">{product.description}</p>
              <p className="product-price">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;