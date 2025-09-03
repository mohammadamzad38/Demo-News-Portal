import moment from "moment";
import logo from "../../public/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 py-2">
      <div className="logo">
        <img className="w-[300x]" src={logo} alt="Logo" />
      </div>
      <h2 className="text-gray-400">Journalism Without fear or Favour</h2>
      <p className="text-black">{moment().format("ddd, MMMM Do YYYY")}</p>
    </div>
  );
};

export default Header;
