import { FunctionComponent } from "react";

import styles from "./GreenText.module.css";

export const GreenText: FunctionComponent = () => (
  <p className={styles.greenText}>This text should be green.</p>
);
