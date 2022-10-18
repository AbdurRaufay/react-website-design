import { Link } from "react-router-dom";
import EmptySetcion from "../components/EmptySetcion";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import PrintingSection from "../components/PrintingSection";
import Services from "../components/Services";
import TeamSection from "../components/TeamSection";
import Testimonal from "../components/Testimonal";

const AdminView = (props) => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <EmptySetcion />
      <Services />
      <Gallery />
      <PrintingSection />
      <div className="emptySection_bottom">
        <EmptySetcion />
      </div>
      <Testimonal />
      <TeamSection />
      <Footer />
    </>
  );
};

export default AdminView;
