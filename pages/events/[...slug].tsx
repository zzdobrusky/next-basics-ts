import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';

type FilteredEventslPageProps = {

};

const FilteredEventslPage: FunctionComponent<FilteredEventslPageProps> = ({ }) => {
    const router = useRouter();
    console.log(router.query);
    
    return (
        <div>
            <h1>Filtered Events</h1>
        </div>
    );
}

export default FilteredEventslPage;