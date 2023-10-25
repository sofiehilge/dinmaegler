import Header from "../templates/Header";
import Navigation from "../templates/Navigation";
import Footer from "../templates/Footer";
import kontaktenmedarbejder from "../assets/kontaktenmedarbejder.png";
import AgentsContactCard from "../templates/AgentsContactCard";

const AgentDetail = () => {
  return (
    <>
      <Header />
      <Navigation />
      <img src={kontaktenmedarbejder} className="w-full" alt="" />
      <AgentsContactCard />
      <Footer />
    </>
  );
};

export default AgentDetail;
