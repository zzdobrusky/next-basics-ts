import { FunctionComponent } from "react";

import EventItem from "./EventItem";

import styles from "./EventList.module.css";

type EventListProps = {
  items: {
    id: string;
    title: string;
    description: string;
    date: string;
    location: string;
    image: string;
    isFeatured: boolean;
  }[];
};

const EventList: FunctionComponent<EventListProps> = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <EventItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default EventList;
