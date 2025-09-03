import { Link } from "react-router-dom";
import userIcon from "../../public/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="flex flex-row items-center gap-2">
        <img src={userIcon} alt="Profile Icon" />
        <button className="btn btn-neutral">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
