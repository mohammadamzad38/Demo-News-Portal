import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-2 items-center border border-black bg-gray-200 py-2">
      <p className="bg-[#D72050] text-white px-3 font-bold py-1">Latest</p>
      <Marquee pauseOnHover={true} speed={100} className="space-x-10">
        <Link to="/news" className="text-base-100 line-clamp-1 list-disc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque,
        </Link>
        <Link to="/news" className="text-base-100 line-clamp-1 list-disc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque,
        </Link>
        <Link to="/news" className="text-base-100 line-clamp-1 list-disc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque,
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
