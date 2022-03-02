import React from 'react'
import { useSelector } from 'react-redux';

// Components
import Header from '../components/header';
import Posts from '../components/posts';
import Footer from '../components/footer';

const home = () => {

    // Redux State Extraction
    const { authenticated } = useSelector( state => state.auth );

    if(!authenticated) return null;

    return (
        <main className="container-home">
            <Header />
            <Posts />
            <Footer />
        </main>
    )
}

export default home