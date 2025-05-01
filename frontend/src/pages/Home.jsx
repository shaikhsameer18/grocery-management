
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import NewsletterBox from "../components/NewsletterBox";

const Home = () => {
  return (
    <div className="bg-white">
      <Hero />

      <div className="mx-auto max-w-7xl">
        <div className="py-12 sm:py-16">
          <BestSeller />
        </div>

        <div className="py-12 sm:py-16">
          <LatestCollection />
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="py-12 sm:py-16">
          <OurPolicy />
        </div>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="py-12 sm:py-16">
          <NewsletterBox />
        </div>
      </div>
    </div>
  );
};

export default Home;
