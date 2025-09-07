import { FaRegEye, FaStar, FaShareAlt, FaRegBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, author, thumbnail_url, details, rating, total_view } = news;

  return (
    <div className="rounded-lg shadow-xl mb-5 bg-white">
      <div className="flex rounded-t-lg justify-between bg-gray-100 py-4 px-6 items-center mb-3">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{author.name}</h3>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toDateString()}
            </p>
          </div>
        </div>
        <div className="space-x-5">
          <button className="text-gray-500 hover:text-gray-700">
            <FaRegBookmark />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <FaShareAlt />
          </button>
        </div>
      </div>

      <div className="mx-4 pb-6">
        <h2 className="font-bold text-lg my-8">{title}</h2>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-[400px] rounded-lg  my-6"
        />

        {/* Details (with Read More) */}
        <p className="text-gray-500 text-xl mb-3">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...{" "}
              <span className="text-orange-500 font-medium cursor-pointer">
                Read More
              </span>
            </>
          ) : (
            details
          )}
        </p>

        {/* Footer (Rating + Views) */}
        <div className="flex justify-between items-center border-t pt-3">
          <div className="flex items-center gap-1 text-orange-400">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`${
                  i < Math.round(rating.number)
                    ? "fill-orange-400"
                    : "fill-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-gray-700 font-semibold">
              {rating.number}
            </span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <FaRegEye /> {total_view}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
