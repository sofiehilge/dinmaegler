import tw from "tailwind-styled-components";
import { useState, useEffect } from "react";
import Button from "../components/Button";

const StyledSection = tw.section`

top-[453px]
w-[920px]
h-[202px]
bg-white

justify-start
p-5
`;
const SearchHouseType = ({ onTypeChange }) => {
  const [houseType, setHouseType] = useState();
  console.log(houseType);
  /* ------------------get all homes--------------- */
  useEffect(() => {
    const getHouseType = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    fetch("https://dinmaegler.onrender.com/homes", getHouseType)
      .then((response) => response.json())
      .then((response) => {
        const uniqueTypes = [...new Set(response.map((item) => item.type))];
        setHouseType(uniqueTypes);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {houseType && houseType.length > 0 && (
        <StyledSection>
          <h2>
            <span className="underline">Søg </span>
            efter dit drømmehus
          </h2>
          <form action="select">
            <select name="typelist" id="Houses" onChange={onTypeChange}>
              {houseType.map((type, index) => (
                <option key={`${type}-${index}`} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </form>
        </StyledSection>
      )}
    </>
  );
};

export default SearchHouseType;
