const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="/public/images/brand_logo.png" alt="logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Loaction</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
};
export default Navbar;