import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (   // ✅ REQUIRED
    <nav aria-label="Global" className="flex items-center justify-evenly lg:px-8 bg-[#f9e5ea] text-[#770844] p-3">
      <a href="/products">Products</a>
      <a href="/about">About</a>
      <Link to="/login">Login</Link>
      {token && <Link to="/dashboard">Dashboard</Link>}
      {token && <button onClick={logout}>Logout</button>}
    </nav>
  );
}

export default Navbar;