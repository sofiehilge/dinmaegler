import tw from "tailwind-styled-components";
import PropertyListCard from "../templates/PropertyListCard"

const StyledArticle = tw.article`
flex
justify-center
flex-col
`;
const SelectedPropertyList = () => {
  return (
    <StyledArticle>
      <h2>Udvalgte Boliger</h2>
      <p>There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p>
      <PropertyListCard/>
    </StyledArticle>
  );
};

export default SelectedPropertyList;
