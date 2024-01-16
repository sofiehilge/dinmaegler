import Header from "../templates/Header";
import Navigation from "../templates/Navigation";
import Footer from "../templates/Footer";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import tw from "tailwind-styled-components";
import heart from "../assets/heart.png";
import layers from "../assets/layers.png";
import map from "../assets/map.png";
import pin from "../assets/pin.png";
import { AiFillPhone } from "react-icons/ai";
import { SiMinutemailer } from "react-icons/si";
import useFavorites from "../hooks/useFavorites";
import { GoHeartFill, GoHeart } from "react-icons/go";

const StyledArticle = tw.main`

shadow-2xl
justify-center
px-xl
`;

const StyledImg = tw.img`
w-[540px]
h-[225px]
`;

const StyledPortrait = tw.img`
w-[280px]
h-[280px]`;

const StyledIcon = tw.img`
w-[38.75px]
h-[35.52px]`;

const PropertyDetails = () => {
  const { id } = useParams();
  const [singleHomeDetails, setSingleHomeDetails] = useState();
  const userData = {
    confirmed: true,
    blocked: false,
    homes: [
      {
        /* ... */
      },
    ],
    username: "Carsten",
    email: "carsten@mail.dk",
    id: "64708c3cfcb201004868c762",
  };

  //Extracting user ID from user data
  const { id: userId } = userData;
  const [favorites, addFavorite, removeFavorite] = useFavorites(userId, []);
  console.log(singleHomeDetails);
  /* ------------------get all homes--------------- */
  useEffect(() => {
    const getSingleHomeDetails = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    fetch(`https://dinmaegler.onrender.com/homes/${id}`, getSingleHomeDetails)
      .then((response) => response.json())
      .then((response) => setSingleHomeDetails(response))
      .catch((err) => console.error(err));
  }, []);

  const handleFavoriteClick = () => {
    const { id } = singleHomeDetails;
    //Check if the current home is already in favorites
    const isFavorite = favorites.includes(id);
    //Toggle the favorite status
    if (isFavorite) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };
  return (
    <>
      <Header />
      <Navigation />
      {singleHomeDetails && (
        <StyledArticle key={singleHomeDetails.id}>
          {singleHomeDetails.images && singleHomeDetails.images.length > 0 && (
            <StyledImg
              src={singleHomeDetails.images[0].url}
              alt={`Ejendom ${singleHomeDetails.adress1} `}
            />
          )}
          <section className="flex">
            <div>
              <h2>{singleHomeDetails.adress1}</h2>
              <div className="flex">
                <p>{singleHomeDetails.postalcode}</p>
                <p>{singleHomeDetails.city}</p>
              </div>
            </div>
            <div>
              <StyledIcon src={map} alt="map" />
              <StyledIcon src={layers} alt="layers" />
              <StyledIcon src={pin} alt="pin" />
              <button onClick={handleFavoriteClick}>
                {favorites.includes(singleHomeDetails.id) ? (<GoHeartFill/>):(<GoHeart/>)}
              </button>
              <StyledIcon
                src={heart}
                alt="heart"
                onClick={handleFavoriteClick}
                style={{
                  filter:
                    favorites && favorites.includes(singleHomeDetails.id)
                      ? "brightness(0.8)"
                      : "brightness(1)",
                }}
              />
            </div>
            <p>kr. {singleHomeDetails.price}</p>
          </section>
          <section className="grid grid-cols-3 gap-4">
            <div>
              <div className="flex">
                <p>Sagsnummer:</p>
                <p>{singleHomeDetails.id}</p>
              </div>
              <div className="flex">
                <p>Boligareal:</p>
                <p>{singleHomeDetails.livingspace}</p>
              </div>
              <div className="flex">
                <p>Grundareal:</p>
                <p>{singleHomeDetails.lotsize}</p>
              </div>
              <div className="flex">
                <p>Rum/værelser:</p>
                <p>{singleHomeDetails.rooms}</p>
              </div>
              <div className="flex">
                <p>Antal plan:</p>
                <p>???</p>
              </div>
            </div>
            <div>
              <div className="flex">
                <p>Kælder:</p>
                <p>{singleHomeDetails.basementsize}</p>
              </div>
              <div className="flex">
                <p>Byggeår:</p>
                <p>{singleHomeDetails.built}</p>
              </div>
              <div className="flex">
                <p>Ombygget:</p>
                <p>{singleHomeDetails.remodel}</p>
              </div>
              <div className="flex">
                <p>Energimærke:</p>
                <p>{singleHomeDetails.energylabel}</p>
              </div>
            </div>
            <div>
              <div className="flex">
                <p>Udbetaling:</p>
                <p>{singleHomeDetails.payment}</p>
              </div>
              <div className="flex">
                <p>Brutto ex ejerudgift:</p>
                <p>{singleHomeDetails.gross}</p>
              </div>
              <div className="flex">
                <p>Netto ex ejerudgift:</p>
                <p>{singleHomeDetails.netto}</p>
              </div>
              <div className="flex">
                <p>Ejerudgifter:</p>
                <p>{singleHomeDetails.cost}</p>
              </div>
            </div>
          </section>
          <section className="flex">
            <aside>
              <h2>Beskrivelse</h2>
              <p>{singleHomeDetails.description}</p>
            </aside>
            <section>
              <h2>Ansvarlig mægler</h2>
              <div className="flex">
                <StyledPortrait src={singleHomeDetails.agent.image.url} />
                <div>
                  <h2>{singleHomeDetails.agent.name}</h2>
                  <p>{singleHomeDetails.agent.title}</p>
                  <div className="flex">
                    <AiFillPhone />
                    <p>{singleHomeDetails.agent.phone}</p>
                  </div>
                  <div className="flex">
                    <SiMinutemailer />
                    <p>{singleHomeDetails.agent.email}</p>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </StyledArticle>
      )}
      <Footer />
    </>
  );
};

export default PropertyDetails;
