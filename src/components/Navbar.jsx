import { Link } from "react-router-dom";
import userIcon from "../../public/user.png";
import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center">
      <p>{user?.email}</p>
      <div className="space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="flex flex-row items-center gap-2">
        <div>
          {user && user?.email ? (
            <div className="place-items-center">
              <img
                className="w-[70px] h-[70px] rounded-full"
                src={user.photoURL}
                alt=""
              />
              <p className="font-bold"> {user.displayName}</p>
            </div>
          ) : (
            <img src={userIcon} alt="Profile Icon" />
          )}
        </div>
        {user && user?.email ? (
          <button onClick={logOut} className="btn btn-neutral">
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
