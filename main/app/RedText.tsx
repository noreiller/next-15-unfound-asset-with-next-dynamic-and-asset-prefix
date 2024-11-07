"use client";

import { FunctionComponent, useEffect, useState } from "react";

import dynamic from "next/dynamic";

import styles from "./RedText.module.css";

const GreenTextDynamic = dynamic(
  () => import("./GreenText").then((mod) => mod.GreenText),
  { ssr: false }
);

export const RedText: FunctionComponent = () => {
  const [displayGreenText, setGreenTextDisplay] = useState(false);

  useEffect(() => {
    setGreenTextDisplay(true);
  }, []);

  return (
    <>
      <p className={styles.redText}>This text should be red.</p>
      {displayGreenText ? <GreenTextDynamic /> : null}
    </>
  );
};
