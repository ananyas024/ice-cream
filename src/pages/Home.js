import React from 'react';
import './Home.css'; // Create a CSS file for styling

function Home() {
  return (
    <div className="home-container">
      {/* Restaurant Name at the Top Middle */}
      <header className="header">
        <h1>Ice Cream Delight</h1>
      </header>

      {/* Content Area */}
      <main className="content">
        <div className="welcome-message">
          <p>Welcome to Ice Cream Delight! 🍦</p>
          <p>We serve the most delicious ice creams in town. Explore our menu and place your order today!</p>
        </div>


        {/* Flavors Section */}
        <div className="flavors">
          <h2>Our Flavors</h2>
          <div className="flavor-list">
            <div className="flavor">Vanilla</div>
            <div className="flavor">Chocolate</div>
            <div className="flavor">Strawberry</div>
            {/* ...more flavors... */}
          </div>
        </div>

        {/* Teaser for About */}
        <div className="about-teaser">
          <h2>Discover Our Story</h2>
          <p>Learn how Ice Cream Delight brings joy to every scoop.</p>
        </div>

        {/* Slider Container */}
        <div className="image-container slider">
          <div className="slider-track">
            {/* Updated image paths */}
            <img src="/images/image1.avif" />
            <img src="/images/image2.jpg" />
            <img src="/images/image3.jpg" />
            {/* Duplicate images for continuous sliding */}
            <img src="/images/image1.avif" />
            <img src="/images/image2.jpg" />
            <img src="/images/image3.jpg" />
          </div>
        </div>

        {/* New bottom text section */}
        <div className="bottom-text">
          <p>Don't forget to check out our latest flavors and special offers!</p>
          <p>Come back often for exciting updates and delicious surprises.</p>
        </div>

        {/* Contact Teaser */}
        <div className="contact-teaser">
          <h2>Have a Question?</h2>
          <p>Get in touch with us for more information!</p>
        </div>

        {/* New Contact Us section */}
        <div className="contact-us">
          <h2>Contact Us</h2>
          <p>Ice Cream Delight</p>
          <p>Email: info@icecreamdelight.com</p>
          <p>Phone: +1-800-123-4567</p>
        </div>
      </main>
    </div>
  );
}

export default Home;