import { useRouter } from "next/router.js";
import ListSurfspots from "../components/ListSurfspots";
import ListSurfspotsItems from "../components/ListSurfspotsItems";
import Header from "../components/Header";
import Head from "next/head";

export default function favoritespots({ listFavSpots }) {
  const router = useRouter();

  function handleMapShown() {
    router.push(`/`);
  }

  return (
    <>
      <Head>
        <title>SpotiFinder</title>
      </Head>
      <Header onMapShown={handleMapShown} />
      <ListSurfspots>
        {listFavSpots.map((surfspot) => {
          return (
            <ListSurfspotsItems
              link={`/${surfspot.slug}`}
              name={surfspot.name}
              key={surfspot._id}
            />
          );
        })}
      </ListSurfspots>
    </>
  );
}
