import tw from "tailwind-styled-components";

const StyledColumn = tw.div`
flex
flex-column`;

const PriceRange = () => {
  return (
    <StyledColumn>
        <p></p>
      <input type="range" min="1" max="100" />
    </StyledColumn>
  );
};

export default PriceRange;
