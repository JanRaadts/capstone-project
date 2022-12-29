import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import addNewSpotBtn from "../public/images/addSpotButton.svg";
import styled from "styled-components";
const Map = dynamic(() => import("../components/Map"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>SpotiFinder</title>
      </Head>
      <Map></Map>
      <StyledAddSpotBtn href={"/addspot"}>
        <Image src={addNewSpotBtn} alt="addSpot" width={50} height={50} />
      </StyledAddSpotBtn>
    </>
  );
}

const StyledAddSpotBtn = styled(Link)`
  z-index: 4;
  position: absolute;
  bottom: 30px;
  left: 10px;
`;
