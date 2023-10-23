import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import logo from "../assets/g1430.png";

const StyledLogo = tw.img`
w-74
h-12.25`;

const Logo = () => {
  return (
    <Link to="/">
      <StyledLogo src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;
