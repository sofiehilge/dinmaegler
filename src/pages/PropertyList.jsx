import Header from "../templates/Header";
import Navigation from "../templates/Navigation";
import Footer from "../templates/Footer";
import PropertyListCard from "../templates/PropertyListCard";
import tw from "tailwind-styled-components";

const StyledGrid = tw.div`
grid 
grid-cols-2 
gap-4
`;
const PropertyList = () => {
  return (
    <>
      <Header />
      <Navigation />
      <StyledGrid>
        <PropertyListCard />
      </StyledGrid>

      <Footer />
    </>
  );
};

export default PropertyList;
