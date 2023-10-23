import tw from "tailwind-styled-components";
import Logo from "../components/Logo";
import Contact from "../components/contact";

const StyledFooter = tw.footer`
px-xl   
 bg-secondaryBgColor
`;
const StyledSection = tw.section`
    h-52
    w-[600px]
flex
flex-col
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledSection>
        <Logo />
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words.
        </p>
      </StyledSection>
      <Contact />
    </StyledFooter>
  );
};

export default Footer;
