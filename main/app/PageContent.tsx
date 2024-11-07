"use client";

import { FunctionComponent } from "react";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { BlueText } from "./BlueText";

const RedTextDynamic = dynamic(
  () => import("./RedText").then((mod) => mod.RedText),
  { ssr: false }
);

export const PageContent: FunctionComponent = () => {
  const [displayRedText, setRedTextDisplay] = useState(false);

  useEffect(() => {
    setRedTextDisplay(true);
  }, []);

  return (
    <>
      <BlueText />
      {displayRedText ? <RedTextDynamic /> : null}
    </>
  );
};
