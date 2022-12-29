import { FunctionComponent } from "react";

import Button from "../ui/Button";
import styles from "./ResultsTitle.module.css";

type ResultsTitleProps = {
  date: Date;
};

const ResultsTitle: FunctionComponent<ResultsTitleProps> = ({ date }) => {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className={styles.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
};

export default ResultsTitle;
