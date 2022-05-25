import Hero from "../components/hero/hero";
import BrandDigitizations from "../components/home/brandDigitization";
import Services from "../components/home/services";
import OurClient from "../components/home/OurClient";
import RecentProject from "../components/home/recentProject";
import Slider2 from "../components/home/Slider2/Slider";
import OurFeatures from "../components/home/ourFeatures";
import Tools from "../components/home/tools";
import Connect from "../components/home/connect";
import Slider from "../components/home/slider/slider";

const Home = () => {
  return (
    <div>
      <Hero />
      <BrandDigitizations />
      <Services />
      <RecentProject />
      <OurClient />
      <Slider2 />
      <OurFeatures />
      <Slider />
      <Tools />
      <Connect />
    </div>
  );
};

export default Home;
