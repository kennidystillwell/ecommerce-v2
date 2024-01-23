import React from 'react';
import './Home.css';
import Carousel from '../components/Carousel';

const Home = () => {
  const images = [
    {
      src: 'images/shampoo hemp.png',
      alt: 'Hemp Shampoo',
      title: 'HEMP SEED OIL LUSH LENGTH SHAMPOO',
      price: '$19.99',
    },
    {
      src: 'images/conditioner hemp.png',
      alt: 'Hemp Conditioner',
      title: 'HEMP SEED OIL LUSH LENGTH CONDITIONER',
      price: '$19.99',
    },
    {
      src: 'images/leave in hemp.png',
      alt: 'Hemp Leave-in',
      title: 'HEMP SEED OIL LUSH LENGTH LITE LEAVE-IN',
      price: '$9.99',
    },
  ];

  return (
    <main>
      <section id="about">
        <img src="/images/about.png" alt="About Us Image" className="about-image" />
        <h2 id="about-us">About Us</h2>
        <p className="about-text">
          At Curly Girl Hair Care, we are more than just a brand; we are a community that celebrates the beauty and diversity of natural hair. Founded with a passion for empowering individuals with type 3 and 4 hair textures, we understand that caring for and embracing your unique curls, coils, and kinks is a journey worth celebrating.
        </p>
        <p className="about-text">
          Our mission is simple: to provide you with reliable hair products that cater specifically to the needs of our curly girls. We believe that your hair is an extension of your identity and deserves the utmost care and attention.
        </p>
        <p className="about-text">
          Thank you for trusting Curly Girl Hair Care as your partner on your natural hair journey. We're here to celebrate your uniqueness, and we can't wait to be a part of your hair care journey!
        </p>
      </section>

      <section className="featured-products">
        <h2 id="featured">FEATURED PRODUCTS</h2>
        <div className="materialize-carousel">
  <Carousel images={images} />
</div>
      </section>
    </main>
  );
};

export default Home;