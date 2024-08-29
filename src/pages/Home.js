import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Service/Services";
import Price from "../components/Price/Price";
import Xizmatlar from "../components/Service/Works";
import Freetrial from "../components/Trial/Freetrial";
import Faq from "../components/Faq/Faq";

function Home() {
  return (
    <div className="w-full font-['SpaceGrotesk'] bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <Header />
      <Services />
      <Xizmatlar />
      <Price />
      <Freetrial />
      <Faq />
      <Footer />
    </div>
  );
}

export default Home;
