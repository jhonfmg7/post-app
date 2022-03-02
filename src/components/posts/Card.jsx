import React, { useEffect, useState } from 'react';
import axiosClient from '../../config/axiosClient';

// Hooks
import useDateCreation from '../../hooks/useDateCreation';

// Components
import Modal from '../modal';
import ZoomImage from './modalsComponents/ZoomImage';
import Comments from './modalsComponents/Comments';

// Material UI icons
import ForumIcon from '@mui/icons-material/Forum';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Author from './modalsComponents/Author';

const Card = ({ item }) => {

    // Local State
    const [ isOpenModalImage, setIsOpenModalImage ] = useState(false);
    const [ isOpenModalComments, setIsOpenModalComments ] = useState(false);
    const [ isOpenModalAuthor, setIsOpenModalAuthor ] = useState(false);
    const [ quantityComments, setQuantityComments ] = useState(0);

    useEffect(() => {
        const query = async() => {
            const response = await axiosClient.get(`/post/${ item.id }/comment`);
            setQuantityComments(response.data.total);
        }
        query();
    }, [])
    
    return (
        <>
            { isOpenModalImage && (
                <Modal isOpen={ isOpenModalImage } setIsOpen={ setIsOpenModalImage }>
                    <ZoomImage item={ item } />
                </Modal>
            ) }

            { isOpenModalComments && (
                <Modal isOpen={ isOpenModalComments } setIsOpen={ setIsOpenModalComments }>
                    <Comments item={ item } />
                </Modal>
            ) }

            { isOpenModalAuthor && (
                <Modal isOpen={ isOpenModalAuthor } setIsOpen={ setIsOpenModalAuthor }>
                    <Author item={ item } />
                </Modal>
            ) }
            <li className="card">
                <div className="card-image-icon" onClick={ () => setIsOpenModalImage(true) }>
                    <div className="card-button">
                        <ZoomOutMapIcon style={{ fontSize: 45 }} />
                    </div>
                </div>
                <div className="card-image-container">
                    <img src={ item?.image } className="card-image" alt="" onClick={ () => setIsOpenModalImage(true) } />
                </div>
                <section className="card-container">
                    <article className="card-header">
                        <svg className="card-arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                        <img className="card-user-image" src={ item?.owner?.picture } alt="" />
                        <div>
                            <h3 className="card-name">M{ item?.owner?.title[1] }. { item?.owner?.firstName } { item?.owner?.lastName }</h3>            
                            <span className="card-title">"{ item?.text }"</span>  
                            <div className="card-tags">
                                { item?.tags?.map( (tag, i) => (
                                    <span key={ i } className="card-tag">{ tag }</span>
                                ) ) }
                            </div>      
                            <span className="card-date">{ useDateCreation(item?.publishDate) }</span>
                        </div>
                    </article>
                    <article className="card-description">
                        <div className="card-button tooltip" onClick={ () => setIsOpenModalAuthor(true) }>
                            <span className="tooltiptext">Autor</span>
                            <ContactMailIcon />
                        </div>
                        <div className="card-button tooltip" onClick={ () => setIsOpenModalComments(true) }>
                            <span className="tooltiptext">Comentarios</span>
                            <div className="notification">
                                <span className="badge">{ quantityComments }</span>
                                <ForumIcon />
                            </div>
                        </div>
                        <div className="card-button tooltip">
                            <span className="tooltiptext">Likes</span>
                            <div className="notification">
                                <span className="badge">{ item?.likes }</span>
                                <ThumbUpIcon />
                            </div>
                        </div>
                    </article>
                </section>
            </li>
        </>
    )
}

export default Card