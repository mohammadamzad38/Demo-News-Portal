import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const SocialLog = () => {
  return (
    <div>
      <h2 className="font-bold mb-10">Login With</h2>
      <div className="space-y-4 ">
        <button className="btn bg-gray-500 w-full">
          <FaGoogle /> Login with Google
        </button>
        <button className="btn bg-gray-500 w-full">
          <FaGithub /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLog;
