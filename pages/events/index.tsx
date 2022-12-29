import { FunctionComponent } from "react";
import { useRouter } from "next/router";

import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";

import { getAllEvents } from "../../dummy-data";

type AllEventsPageProps = {};

const AllEventsPage: FunctionComponent<AllEventsPageProps> = ({}) => {
  const router = useRouter();
  const allEvents = getAllEvents();

  function findEventsHandler(
    year: string | undefined,
    month: string | undefined
  ) {
    router.push(`/events/${year}/${month}`);
  }

  return (
    <>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={allEvents} />
    </>
  );
};

export default AllEventsPage;
