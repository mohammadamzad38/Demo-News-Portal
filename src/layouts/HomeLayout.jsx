import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNav from "../components/Layout-components/LeftNav";
import RightNav from "../components/Layout-components/RightNav";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header />
        <section className="w-11/12 mx-auto">
          <LatestNews />
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-2">
        <Navbar />
      </nav>
      <main className="w-11/12 mx-auto pt-5 flex flex-row gap-10">
        <aside className="w-[25%]">
          <LeftNav />
        </aside>
        <section className="w-[50%]">
        <Outlet />
        </section>
        <aside className="w-[25%]">
          <RightNav />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
