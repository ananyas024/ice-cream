import React from 'react';
import './Home.css'; // Create a CSS file for styling

function Home() {
  return (
    <div className="home-container">

      {/* Content Area */}
      <main className="content">
        <div className="welcome-message">
          <p>Welcome to Ice Cream Delight! 🍦</p>
          <p>We serve the most delicious ice creams in town. Explore our menu and place your order today!</p>
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
            <img src="/images/image1.avif" alt="" />
            <img src="/images/image2.jpg" alt=""/>
            <img src="/images/image3.jpg" alt=""/>
            {/* Duplicate images for continuous sliding */}
            <img src="/images/image1.avif" alt="" />
            <img src="/images/image2.jpg" alt=""/>
            <img src="/images/image3.jpg" alt=""/>
          </div>
        </div>

        {/* New bottom text section */}
        <div className="bottom-text">
          <p>Don't forget to check out our latest flavors and special offers!</p>
          <p>Come back often for exciting updates and delicious surprises.</p>
        </div>
      </main>
    </div>
  );
}

export default Home;