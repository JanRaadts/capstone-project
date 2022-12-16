import Header from "../../components/Header";
import ListSurfspots from "../../components/ListSurfspots";
import ListSurfspotsItems from "../../components/ListSurfspotsItems";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Countries() {
  const router = useRouter();

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
        <ListSurfspotsItems link="/countries/germany" name={"Germany"} />
        <ListSurfspotsItems link="/countries/dänemark" name={"Dänemark"} />
      </ListSurfspots>
    </>
  );
}
