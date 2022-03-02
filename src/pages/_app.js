import Head from 'next/head';
import { Provider } from 'react-redux';

// Styles
import '../styles/globals.css';

// Store Redux
import store from '../redux/store';

// Layout
import MainLayout from '../layouts/MainLayout';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>La mejor página</title>
                <meta name="description" content="the best page ever" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Provider store={ store }>
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </Provider>
        </>
    )
}

export default MyApp
