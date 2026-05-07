import logo from "../assets/logo.png";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";


function Header() {
  return (
    <header className="relative flex items-center lg:px-8 bg-[#f9e5ea] h-25">

      {/* Center Logo */}
      <div className="absolute left-1/2 -translate-x-1/2">
      <Link to="/"><img src={logo} alt="logo" width="100" /></Link>
      </div>

      {/* Search Icon at End */}
      <Search
        className="ml-auto text-[#770844]"
        size={20}
      />

    </header>
  );
}

export default Header;