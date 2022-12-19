import { useRouter } from "next/router.js";
import ListSurfspots from "../../components/ListSurfspots";
import ListSurfspotsItems from "../../components/ListSurfspotsItems";
import Header from "../../components/Header";
import Head from "next/head";
import useFetch from "../../lib/fetch";

export default function SpotDetails() {
  const surfspots = useFetch("http://localhost:3000/api/");
  const router = useRouter();
  const { slug } = router.query;

  const currentSpot = surfspots.find((spot) => spot.country === slug);

  if (!currentSpot) {
    return console.log("seite noch nicht geladen");
  }

  const spotsincountry = surfspots.filter(
    (surfspot) => surfspot.country === slug
  );

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
        {spotsincountry.map((surfspot) => {
          return (
            <ListSurfspotsItems
              link={`/${surfspot.slug}`}
              name={surfspot.name}
              key={surfspot.ID}
            />
          );
        })}
      </ListSurfspots>
    </>
  );
}
