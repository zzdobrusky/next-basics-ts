import Link from 'next/link';
import { FunctionComponent } from 'react';

import styles from './MainHeader.module.css';

type MainHeaderProps = {

};

const MainHeader: FunctionComponent<MainHeaderProps> = ({ }) => {
    return (
        <header className={styles.header}>
           <div className={styles.logo}>
            <Link href='/'>Next Events</Link>
           </div>
           <nav className={styles.navigation}>
            <ul>
                <li>
                    <Link href='/events'>Browse All Events</Link>
                </li>
            </ul>

           </nav>
        </header>
    );
}

export default MainHeader;