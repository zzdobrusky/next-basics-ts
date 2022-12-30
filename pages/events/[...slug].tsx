import { FunctionComponent } from "react";
import { useRouter } from "next/router";

import { getFilteredEvents } from "../../dummy-data";

import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/ErrorAlert";

type FilteredEventslPageProps = {};

const FilteredEventslPage: FunctionComponent<
  FilteredEventslPageProps
> = ({}) => {
  const router = useRouter();
  const filterData = router.query.slug;
  console.log(filterData);

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const numYear = +filterData[0];
  const numMonth = +filterData[1];

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <div className="center">
        <ErrorAlert><p>Invalid filter. Please adjust your values!</p></ErrorAlert>
        <Button link="/events">Show All Events</Button>
      </div>
    );
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div className="center">
        <ErrorAlert><p>No events found</p></ErrorAlert>
        <Button link="/events">Show All Events</Button>
      </div>
    );
  }
  const date = new Date(numYear, numMonth - 1);

  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  );
};

export default FilteredEventslPage;
