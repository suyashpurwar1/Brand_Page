const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="b2">Category</button>
        </div>
        <div className="shop">
          <p>Available On</p>
        </div>
        <div>
          <img
            className="icon"
            src="/public/images/flipkart.png"
            alt="flipkart"
          />
          <img className="icon" src="/public/images/amazon.png" alt="amazon" />
        </div>
      </div>
      <div className="hero-img">
        <img src="/public/images/shoe_image.png" alt="shoe" />
      </div>
    </main>
  );
};
export default Hero;
