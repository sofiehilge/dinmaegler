import tw from "tailwind-styled-components";
import Image from "../assets/Image.png";
import houseinhand from "../assets/houseinhand.png";
import home from "../assets/home.png";
import property from "../assets/property.png";
import pindark from "../assets/pindark.png";
import customer from "../assets/customer.png";
const StyledSection = tw.section`
p-xl
`;

const StyledRow = tw.div`
flex
flex-row
`;

const StyledImg = tw.img`
w-[477px]
h-[502px]
`;

const StyledColumn = tw.aside`
flex-column
`;

const StyledIcon = tw.img`
w-[42px]
h-[42px]
`;

const StyledSmallIcon = tw.img`
w-[36px]
h-[36px]`;

const ServiceCard = () => {
  return (
    <StyledSection>
      <StyledRow>
        <StyledImg src={Image} />
        <StyledColumn className="px-xl">
          <h2>Vi har fulgt danskerne hjem i snart 4 årtier</h2>
          <p>Det synes vi siger noget om os!</p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has normal distribution.
          </p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <StyledRow>
            <StyledRow>
              <StyledIcon src={houseinhand} />
              <StyledColumn>
                <p>XXXX</p>
                <p>boliger Solgt</p>
              </StyledColumn>
            </StyledRow>
            <StyledRow>
              <StyledIcon src={home} />
              <StyledColumn>
                <p>XXXX</p>
                <p>boliger til salg</p>
              </StyledColumn>
            </StyledRow>
          </StyledRow>
        </StyledColumn>
      </StyledRow>
      <StyledSection>
        <StyledRow>
          <StyledSmallIcon src={property} />
          <StyledColumn>
            <h3>Bestil et salgstjek</h3>
            <p>
              Med et Din Mægler Salgstjek bliver du opdateret på værdien af din
              bolig.
            </p>
          </StyledColumn>
          <StyledSmallIcon src={pindark} />
          <StyledColumn>
            <h3>Bestil et salgstjek</h3>
            <p>
              Med et Din Mægler Salgstjek bliver du opdateret på værdien af din
              bolig.
            </p>
          </StyledColumn>
          <StyledSmallIcon src={customer} />
          <StyledColumn>
            <h3>Bestil et salgstjek</h3>
            <p>
              Med et Din Mægler Salgstjek bliver du opdateret på værdien af din
              bolig.
            </p>
          </StyledColumn>
        </StyledRow>
      </StyledSection>
    </StyledSection>
  );
};

export default ServiceCard;
