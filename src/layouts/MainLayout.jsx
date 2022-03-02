import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

// Components
import AlertMessage from '../components/alerts';

const MainLayout = ({ children }) => {

    // Router Instance
    const router = useRouter();

    // Redux state extraction
    const { authenticated } = useSelector( state => state.auth );

    useEffect(() => {
        if (!authenticated) router.push('/');
    }, [ authenticated ]);

    return (
        <Fragment>
            { children }
            <AlertMessage />
        </Fragment>
    )
}

export default MainLayout