import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";

const StyledNav = tw.nav`
flex
flex-row
bg-primaryColor
justify-between
px-xl
`;
//px-xl custom padding

const StyledSpan = tw.span`
flex
gap-3
`;

const Header = () => {
  return (
    <StyledNav>
      <StyledSpan>
        <p className="text-white">4000@dinmaegler.com</p>
        <p className="text-white">+45 7070 4000</p>
      </StyledSpan>
      <Link to="/login">
        <p className="text-white">Log ind</p>
      </Link>
    </StyledNav>
  );
};

export default Header;
