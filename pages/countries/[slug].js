import { useRouter } from "next/router.js";
import surfspots from "../../lib/surfspots";
import ListSurfspots from "../../components/ListSurfspots";
import ListSurfspotsItems from "../../components/ListSurfspotsItems";
import Header from "../../components/Header";
import Head from "next/head";

export default function SpotDetails() {
  const router = useRouter();
  const { slug } = router.query;

  const currentSpot = surfspots.find((spot) => spot.country === slug);

  if (!currentSpot) {
    return <p>Not found</p>;
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
        <title>MySurfSpot</title>
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
