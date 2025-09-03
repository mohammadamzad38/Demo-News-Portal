import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
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
      <main className="w-11/12 mx-auto pt-5 flex flex-row gap-2">
        <aside className="w-[25%]">Left Nav</aside>
        <section className="w-[50%]">main Content</section>
        <aside className="w-[25%]">Right Nav</aside>
      </main>
    </div>
  );
};

export default HomeLayout;
