import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { getAuthorAction } from '../../../redux/actions/appActions';

// Components
import Modal from '../../modal';
import ZoomImage from './ZoomImage';

const Author = ({ item }) => {

    // Dispatch Instance
    const dispatch = useDispatch();

    // Redux State Extraction
    const { authenticated } = useSelector( state => state.auth );
    const { author } = useSelector( state => state.app );

    // Local State
    const [ isOpenModalImage, setIsOpenModalImage ] = useState(false)

    useEffect(() => {
        dispatch(getAuthorAction(authenticated, item?.owner?.id));
    }, [ item ]);

    return (
        <>
            { isOpenModalImage && (
                <Modal isOpen={ isOpenModalImage } setIsOpen={ setIsOpenModalImage }>
                    <ZoomImage item={{ image: author?.picture, text: author?.firstName }} />
                </Modal>
            ) }
            <section className="modal-component-container">
                <h2 className="no-margin-top">Información del Autor</h2>
                { !author ? (
                    <p className="no-margin-top">No hay autor para mostrar</p>
                ) : (
                    <div className="author-card">
                        <img onClick={ () => setIsOpenModalImage(true) } src={ author?.picture } className="author-image" alt="" />
                        <div className="text-left">
                            <p className="author-info">M{ author?.title[1] }. { author?.firstName } { author?.lastName }</p>
                            <p className="author-info">Genero: { author?.gender }</p>
                            <p className="author-info">Teléfono: { author?.phone }</p>
                            <p className="author-info">Fecha de nacimiento: { author?.dateOfBirth?.slice(0, 10) }</p>
                            <p className="author-info">Fecha de Registro: { author?.registerDate?.slice(0, 10) }</p>
                            <p className="author-info">Ciudad: { author?.location?.city }</p>
                        </div>
                    </div>
                ) }
            </section>
        </>
    )
}

export default Author