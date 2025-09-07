import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCart";

export const CategoryNews = () => {
  const { data: news } = useLoaderData();

  return (
    <div>
      <h2 className="font-bold text-2xl mb-8">Dragon News Home</h2>

      <div>
        {news.map((singleNews) => (
          <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
        ))}
      </div>
    </div>
  );
};
