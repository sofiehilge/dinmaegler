import Header from "../templates/Header";
import Navigation from "../templates/Navigation";
import Footer from "../templates/Footer";
import Banner from "../assets/Banner.png";

import AgentsListCard from "../templates/AgentsListCard";

const Agents = () => {
  return (
    <>
      <Header />
      <Navigation />
      <img src={Banner} className="w-full" />
      <AgentsListCard />
      <Footer />
    </>
  );
};

export default Agents;
