import React from 'react';
import { useSelector } from 'react-redux';

// Material UI Icons
import InfoIcon from '@mui/icons-material/Info';

const AlertMessage = () => {

    // Redux State Extraction
    const { message } = useSelector( state => state.auth );

    return (
        <section className={ message && message !== "" ? "box-message" : "box-message hidden"}>
            <h4 className="title-message">Mensaje del Sistema</h4>
            <article className="body-message">
                <InfoIcon />
                <p>{ message }</p>
            </article>
        </section>
    )
}

export default AlertMessage