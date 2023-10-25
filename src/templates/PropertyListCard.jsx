import { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";

const StyledArticle = tw.main`
w-[540px]
h-[446px]
shadow-2xl
px-xl
`;

const StyledImg = tw.img`
w-[540px]
h-[225px]
`;

const PropertyListCard = () => {
  const [allHomesList, setallHomesList] = useState();
  console.log(allHomesList);
  /* ------------------get all homes--------------- */
  useEffect(() => {
    const getAllHomes = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    fetch("https://dinmaegler.onrender.com/homes", getAllHomes)
      .then((response) => response.json())
      .then((response) => setallHomesList(response))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      {allHomesList &&
        allHomesList.map((item) => (
          <Link to={`../propertydetails/${item.id}`}>
            <StyledArticle key={item.id}>
              {item.images && item.images.length > 0 && (
                <StyledImg
                  src={item.images[0].url}
                  alt={`Ejendom ${item.adress1} `}
                />
              )}
              {/* her indsættes hjerte icon! */}
              <h2 title={item.adress1}>{item.adress1}</h2>
              <div className="flex">
                <p>{item.postalcode}</p>
                <p>{item.city}</p>
              </div>
              <div className="flex">
                <p>{item.type}</p>
                <p>Ejerudgifter {item.cost}</p>
              </div>
              <div className="flex justify-between">
                <div className="flex">
                  <p>{item.energylabel}</p>
                  <p>Værelser {item.rooms}</p>
                  <p>{item.livingspace}m2</p>
                </div>
                <p>kr. {item.price}</p>
              </div>
            </StyledArticle>
          </Link>
        ))}
    </>
  );
};

export default PropertyListCard;
