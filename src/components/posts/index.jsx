import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { getPostsAction, getPostsWithTagAction } from '../../redux/actions/appActions';

// Components
import Card from './Card';
import Loader from '../loader';
import Paginator from './paginator';
import TagSelector from './tagSelector';

const Posts = () => {

    // Dispatch Instance
    const dispatch = useDispatch();

    // Redux State Extraction
    const { authenticated } = useSelector( state => state.auth );
    const { posts, loading } = useSelector( state => state.app );

    // Local State
    const [ page, setPage ] = useState(0);
    const [ quantityPerPage, setQuantityPerPage ] = useState(12);
    const [ tagsSelected, setTagsSelected ] = useState("");

    useEffect(() => {
        if (tagsSelected === "") {
            dispatch(getPostsAction(authenticated, page, quantityPerPage));
        } else {
            dispatch(getPostsWithTagAction(authenticated, page, quantityPerPage, tagsSelected))
        }
    }, [ page, quantityPerPage, tagsSelected ]);

    return (
        <main className="posts-container">
            <TagSelector 
                quantityPerPage={ quantityPerPage } 
                setQuantityPerPage={ setQuantityPerPage } 
                setTagsSelected={ setTagsSelected }
            />
            <Paginator page={ page } setPage={ setPage } quantityPerPage={ quantityPerPage } />
            { loading && (
                <Loader />
            ) }
            <ul className="cards">
                { posts?.map( item => (
                    <Card key={ item.id } item={ item } />
                ) )}
            </ul>
            <Paginator page={ page } setPage={ setPage } quantityPerPage={ quantityPerPage }  />
        </main>
    )
}

export default Posts