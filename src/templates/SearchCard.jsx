import tw from "tailwind-styled-components";
import { useState, useEffect } from "react";
import Button from "../components/Button"
const StyledSection = tw.section`
absolute
top-[453px]
w-[920px]
h-[202px]
bg-white

justify-start
p-5
`;
const SearchCard = () => {
  const [countHomes, setCountHomes] = useState();
  console.log(countHomes);
  /* ------------------get all homes--------------- */
  useEffect(() => {
    const getCountHomes = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    fetch("https://dinmaegler.onrender.com/homes/count", getCountHomes)
      .then((response) => response.json())
      .then((response) => setCountHomes(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {countHomes && (
        <StyledSection>
          <h2>
            <span className="underline">Søg </span>
            blandt {countHomes} boligertil salg i 74 butikker
          </h2>
          <p>Hvad skal din næste bolig indeholde</p>
          <form action="input">
            <input
              type="search"
              className="w-[728px] h-[48px]"
              placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende"
            />
            <Button/>
          </form>
        </StyledSection>
      )}
      ;
    </>
  );
};

export default SearchCard;
