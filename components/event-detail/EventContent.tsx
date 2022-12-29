import { FunctionComponent, ReactNode } from "react";

import styles from './EventContent.module.css';

type EventContentProps = {
  children: ReactNode;
};

const EventContent: FunctionComponent<EventContentProps> = ({ children }) => {
  return (
    <section className={styles.content}>
      {children}
    </section>
  );
}

export default EventContent;
