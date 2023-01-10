import Header from "../../components/Header";
import ListSurfspots from "../../components/ListSurfspots";
import ListSurfspotsItems from "../../components/ListSurfspotsItems";
import { useRouter } from "next/router";
import Head from "next/head";
import FavoriteSpotsListItem from "../../components/FavoriteSpotsListItem";

export default function Countries({ surfspots }) {
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

  return (
    <>
      <Head>
        <title>SpotiFinder</title>
      </Head>
      <Header onMapShown={handleMapShown} usedMapShown={false} />
      <ListSurfspots>
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
      </ListSurfspots>
    </>
  );
}
