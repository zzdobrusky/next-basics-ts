import { FunctionComponent } from 'react';
import EventList from '../components/events/EventList';

import { getFeaturedEvents } from '../dummy-data';

type HomePageProps = {

};

const HomePage: FunctionComponent<HomePageProps> = ({ }) => {
    const featuredEvents = getFeaturedEvents();
    return (
        <div>
            <h1>Home Page</h1>
            <EventList items={featuredEvents} />
        </div>
    );
}

export default HomePage;