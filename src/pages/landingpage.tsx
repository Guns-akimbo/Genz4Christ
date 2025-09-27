import Header from "../components/Header";
import HeroSection from "../components/herosection";
import Vision from "../components/vision";
import Mid from "../components/mid";
import ShareYourStory from "../components/share";
import Benefits from "../components/benefit";
import Sponsor from "../components/sponsor";
import Carousel from "../components/carousel";
import Footer from "../components/footer";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Vision />
      <Mid />
      <ShareYourStory />
      <Benefits />
      <Sponsor />
      <Carousel />
      <Footer />
    </div>
  );
};

export default LandingPage;
