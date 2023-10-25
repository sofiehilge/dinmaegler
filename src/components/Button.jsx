import tw from "tailwind-styled-components";

const StyledButton = tw.button`
w-[120px]
h-[48px]
bg-primaryColor
`;

const StyledP = tw.p`
text-white
`;
const Button = () => {
  return (
    <StyledButton>
      <StyledP>Søg</StyledP>
    </StyledButton>
  );
};

export default Button;
