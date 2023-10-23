import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/g1430.png";
import Logo from "../components/Logo";
import Heading from "../components/Heading";

const StyledNavigation = tw.nav`
flex
justify-between
px-xl
py-4
`;



const StyledSpan = tw.span`
flex
gap-4

`;
const Navigation = () => {
  return (
    <StyledNavigation>
     <Logo/>

      <StyledSpan>
        <Link to="/propertylist">
          <Heading>Boliger til salg</Heading>
        </Link>
        <Link to="/agents">
          <p>Mæglere</p>
        </Link>
        <Link to="/favorites">
          <p>Mine favoritter</p>
        </Link>
        <Link to="/contactus">
          <p>Kontakt os</p>
        </Link>
      </StyledSpan>
    </StyledNavigation>
  );
};

export default Navigation;
