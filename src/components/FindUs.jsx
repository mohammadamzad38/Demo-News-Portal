import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold my-5">Find Us On</h2>
      <div className="join flex gap-2 join-vertical *:bg-gray-300 ">
        <button className="btn join-item border-none justify-start text-black">
          <FaFacebook /> Facebook
        </button>
        <button className="btn join-item border-none justify-start text-black">
          <FaInstagram /> Instagram
        </button>
        <button className="btn join-item border-none justify-start text-black">
          <FaLinkedin /> Linkedin
        </button>
        <div className=""></div>
    
      </div>
    </div>
  );
};

export default FindUs;
