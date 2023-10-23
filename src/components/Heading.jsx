import tw from "tailwind-styled-components";

const StyledHeading = tw.p`
text-para01`;

const Heading = (props) => {
  return <StyledHeading>{props.title}</StyledHeading>;
};

export default Heading;
