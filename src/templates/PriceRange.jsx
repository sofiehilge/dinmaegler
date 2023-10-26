import tw from "tailwind-styled-components";
import {useState, useEffect} from "react"

const StyledColumn = tw.div`
flex
flex-column`;

const PriceRange = (min, max) => {

    const [priceRange, setPriceRange] = useState();
    console.log(priceRange);
    /* ------------------get all homes--------------- */
    useEffect(() => {
      const getPriceRange = {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      };
  
      fetch(`https://dinmaegler.onrender.com/homes?price_gte=${min}&price_lt=${max}`, getPriceRange)
        .then((response) => response.json())
        .then((response) => setPriceRange(response))
        .catch((err) => console.error(err));
    }, []);

  return (
    <StyledColumn>
        <p>Pris-interval</p>
      <input type="range" min="0 kr." max="12.000.000 kr." value="100.000"/>
    </StyledColumn>
  );
};

export default PriceRange;
