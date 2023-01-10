import { useRouter } from "next/router";
import { useState } from "react";
import ListSurfspots from "../../components/ListSurfspots";
import ListSurfspotsItems from "../../components/ListSurfspotsItems";
import Head from "next/head";
import FavoriteSpotsListItem from "../../components/FavoriteSpotsListItem";
import SearchSpot from "../../components/SearchSpot";
import MenueHeader from "../../components/MenueHeader";

export default function Countries({ surfspots }) {
  const [searchTerm, setSearchTerm] = useState(false);
  const [searchedSpots, setSearchedSpots] = useState([]);

  const router = useRouter();
  const allCountrys = surfspots.map((surfspot) => {
    return surfspot.country;
  });
  const uniqueCountrys = Array.from(new Set(allCountrys));

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function handleMapShown() {
    router.push(`/`);
  }

  function handleChange(event) {
    setSearchTerm(event.target.value);
    let searchValue = event.target.value;
    setSearchedSpots(
      surfspots.filter((spot) => spot.slug.includes(searchValue.toLowerCase()))
    );

    if (event.target.value === "") {
      setSearchTerm(false);
    } else {
      setSearchTerm(true);
    }
  }

  console.log(searchTerm);

  return (
    <>
      <Head>
        <title>SpotiFinder</title>
      </Head>
      <MenueHeader onMapShown={handleMapShown} usedMapShown={false} />
      <ListSurfspots>
        <SearchSpot onChange={handleChange} />
        {searchTerm ? (
          <>
            {" "}
            {searchedSpots.map((spot) => {
              return (
                <ListSurfspotsItems
                  link={`/${spot.slug}`}
                  name={spot.name}
                  key={spot._id}
                />
              );
            })}
          </>
        ) : (
          <>
            <FavoriteSpotsListItem name={"Favoriten"} link={`/favoritespots`} />
            {uniqueCountrys.map((uniqueCountry) => {
              const countryName = capitalizeFirstLetter(uniqueCountry);
              return (
                <ListSurfspotsItems
                  link={`/countries/${uniqueCountry}`}
                  name={countryName}
                  key={uniqueCountry}
                />
              );
            })}
          </>
        )}
      </ListSurfspots>
    </>
  );
}
