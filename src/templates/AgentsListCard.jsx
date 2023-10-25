import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import tw from "tailwind-styled-components";

const StyledImg = tw.img`
w-[350px]
h-[300px]`;

const AgentsListCard = () => {
  const [allAgents, setAllAgents] = useState();
  console.log(allAgents);
  /* ------------------get all homes--------------- */
  useEffect(() => {
    const getAllAgents = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    fetch("https://dinmaegler.onrender.com/agents", getAllAgents)
      .then((response) => response.json())
      .then((response) => setAllAgents(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {allAgents &&
        allAgents.map((item) => (
          <Link to={`../agentdetail/${item.id}`} key={item.id}>
            <section className="px-xl">
              <StyledImg src={item.image.url} alt="" />
              <h2>{item.name}</h2>
              <p>{item.title}</p>
            </section>
          </Link>
        ))}
    </>
  );
};

export default AgentsListCard;
