import tw from "tailwind-styled-components";
import homebanner from "../assets/homebanner.png";
import SearchCard from "./SearchCard";


const StyledOpacityDiv = tw.div`
relative
h-[700px]
w-full
flex
justify-center
`;

const StyledImg = tw.img`
h-[700px]
w-full
`;

const StyledHeading = tw.h1`
absolute
top-[347px]
text-hero
`;

const HomeBanner = () => {
  return (
    <StyledOpacityDiv>
      <StyledImg src={homebanner} alt="house" />
      <StyledHeading>Søg efter din drømmebolig</StyledHeading>
      <SearchCard />
    </StyledOpacityDiv>
  );
};

export default HomeBanner;
