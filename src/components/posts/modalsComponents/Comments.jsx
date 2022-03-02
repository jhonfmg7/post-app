import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Hooks
import useDateCreation from '../../../hooks/useDateCreation';

// Actions
import { getCommentsAction } from '../../../redux/actions/appActions';

const Comments = ({ item }) => {

    // Dispatch Instance
    const dispatch = useDispatch();

    // Redux State Extraction
    const { authenticated } = useSelector( state => state.auth );
    const { comments } = useSelector( state => state.app );

    useEffect(() => {
        dispatch(getCommentsAction(authenticated, item?.id));
    }, [ item ]);

    return (
        <section className="modal-component-container">
            <h2 className="no-margin-top">Comentarios</h2>
            { comments.length === 0 && (
                <p className="no-margin-top">No hay comentarios para mostrar</p>
            ) }
            <ul className="comments">
                { comments?.map( value =>  (
                    <li key={ value.id } className={value.owner.id === item.owner.id ? "comment-sender" : "comment-receiver" }>
                        <div className="comment-header">
                            <p className="comment-creator">M{ value?.owner?.title[1] }. { value?.owner?.firstName } { value?.owner?.lastName }</p>
                            <p className="comment-date">{ useDateCreation(value?.publishDate) }</p>
                        </div>
                        <p className="comment">{ value?.message }</p>
                    </li>
                ) ) }
            </ul>
        </section>
    )
}

export default Comments