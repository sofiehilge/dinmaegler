import Header from "../templates/Header";
import Navigation from "../templates/Navigation";
import Footer from "../templates/Footer";
import HomeBanner from "../templates/HomeBanner";
import ServiceCard from "../templates/ServiceCard";
import SelectedPropertyList from "../templates/SelectedPropertyList";
const Home = () => {
  return (
    <>
      <Header />
      <Navigation />
      <HomeBanner />
      <ServiceCard />
      <SelectedPropertyList />
      <Footer />
    </>
  );
};

export default Home;
