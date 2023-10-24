import Header from "../templates/Header";
import Navigation from "../templates/Navigation";
import Footer from "../templates/Footer";
import Banner from "../assets/Banner.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Agents = () => {
  const [allAgents, setAllAgents] = useState();
  console.log(allAgents);
  /* ------------------get all homes--------------- */
  useEffect(() => {
    const getAllAgents = {
      method: "G!!!ET",
      headers: {
        accept: "application/json",
      },
    };

    fetch(`https://dinmaegler.onrender.com/agents`, getAllAgents)
      .then((response) => response.json())
      .then((response) => setAllAgents(response))
      .catch((err) => console.error(err));
  }, []);
////her er en fejl!!!!!
  return (
    <>
      {allAgents &&
        allAgents.map((item) => (
          <Link key={item.id}>
            <Header />
            <Navigation />
            <img src={Banner} className="w-full" />
            <section>
              <img src={item.agent.image.url} alt="" />
            </section>
            <Footer />
          </Link>
        ))}
    </>
  );
};

export default Agents;
