import { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import { useParams } from "react-router-dom";

const StyledImg = tw.img`
w-[350px]
h-[300px]`;

const AgentsContactCard = () => {
  const { id } = useParams();
  const [agentsContactCard, setAgentsContactCard] = useState();
  console.log(agentsContactCard);
  /* ------------------get all homes--------------- */
  useEffect(() => {
    const getAgentsContact = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    fetch(`https://dinmaegler.onrender.com/agents/${id}`, getAgentsContact)
      .then((response) => response.json())
      .then((response) => setAgentsContactCard(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {agentsContactCard && (
        <section className="px-xl">
          <StyledImg src={agentsContactCard.image.url} alt="" />
          <h2>{agentsContactCard.name}</h2>
          <p>{agentsContactCard.title}</p>
        </section>
      )}
    </>
  );
};

export default AgentsContactCard;
