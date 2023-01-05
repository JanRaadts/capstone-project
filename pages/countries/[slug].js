import { useRouter } from "next/router.js";
import ListSurfspots from "../../components/ListSurfspots";
import ListSurfspotsItems from "../../components/ListSurfspotsItems";
import Header from "../../components/Header";
import Head from "next/head";

export default function SpotDetails({ surfspots }) {
  const router = useRouter();
  const { slug } = router.query;

  const spotsincountry = surfspots.filter(
    (surfspot) => surfspot.country === slug
  );

  console.log(spotsincountry);

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
              key={surfspot._id}
            />
          );
        })}
      </ListSurfspots>
    </>
  );
}
