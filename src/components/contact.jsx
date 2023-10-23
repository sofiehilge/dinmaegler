import { BsFillTelephoneFill } from "react-icons/bs";
import tw from "tailwind-styled-components";

const StyledIcon = tw.i`
bg-primaryColor
p-2
rounded-[50%]
`;
const Contact = () => {
  return (
    <>
      <StyledIcon>
        <BsFillTelephoneFill className="text-white"/>
      </StyledIcon>
      <p>Ring til os</p>
      <p>+45 70704000</p>
    </>
  );
};

export default Contact;
