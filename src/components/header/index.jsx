import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Google
import { useGoogleLogout } from 'react-google-login';

// Actions
import { logoutAction } from '../../redux/actions/authActions';

const Header = () => {

    // Dispatch Instance
    const dispatch = useDispatch();

    // Redux State Extraction
    const { user } = useSelector( state => state.auth );

    const onLogoutSuccess = (response) => {
        return dispatch(logoutAction(true, response));
    }

    const onFailure = (response) => {
        if (response) return dispatch(logoutAction(false, response));
    }

    const { signOut } = useGoogleLogout({
        clientId:  process.env.NEXT_PUBLIC_GOOGLE_ID ,
        onLogoutSuccess,
        onFailure
    });

    return (
        <nav className="header">
            <section className="header-section">
                <article className="header-article">
                    <img src={ user?.imageUrl } className="user-image" alt="" />
                    <div>
                        <p className="user-name">{ user?.name }</p>
                        <p className="user-email">{ user?.email }</p>
                    </div>
                </article>
            </section>
            <section className="header-section" onClick={ signOut }>
                <p>Cerrar Sesión</p>
            </section>
        </nav>
    )
}

export default Header