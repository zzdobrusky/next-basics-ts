import { FunctionComponent, ReactNode } from 'react';

import MainHeader from './MainHeader';

type LayoutProps = {
    children: ReactNode
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
    return (
        <>
            <MainHeader />
            <main>
                {children}
            </main>
        </>
    );
}

export default Layout;