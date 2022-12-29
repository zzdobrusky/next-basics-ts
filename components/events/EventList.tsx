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
      {items && items.length > 0 ? (
        items.map((item) => <EventItem key={item.id} {...item} />)
      ) : (
        <p className="center">No events found</p>
      )}
    </ul>
  );
};

export default EventList;
