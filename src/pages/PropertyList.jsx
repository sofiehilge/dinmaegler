import Header from "../templates/Header";
import Navigation from "../templates/Navigation";
import Footer from "../templates/Footer";
import PropertyListCard from "../templates/PropertyListCard";
import tw from "tailwind-styled-components";
import boligertilsalg from "../assets/boligertilsalg.png";
import SearchHouseType from "../templates/SearchHouseType";
import PriceRange from "../templates/PriceRange";
import { useState } from "react";

const StyledGrid = tw.div`
grid 
grid-cols-2 
gap-4
`;

const StyledMain = tw.main`
mx-20
my-2
`;

const StyledRow = tw.div`
flex
flex-row`;

const PropertyList = () => {
  const [selectedType, setSelectedType] = useState();
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };
  return (
    <>
      <Header />
      <Navigation />
      <img src={boligertilsalg} className="w-full" alt="" />
      <StyledMain>
        <StyledRow>
          <SearchHouseType onTypeChange={handleTypeChange} />
          <PriceRange />
        </StyledRow>
        <StyledGrid>
          <PropertyListCard selectedType={selectedType} />
        </StyledGrid>
      </StyledMain>

      <Footer />
    </>
  );
};

export default PropertyList;
