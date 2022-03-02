import React from 'react';

// Components
import SelectQuantity from './SelectQuantity';
import SelectTag from './SelectTag';

const TagSelector = ({ quantityPerPage, setQuantityPerPage, tagsSelected, setTagsSelected }) => {
    return (
        <section className="paginator-container">
            <SelectQuantity value={ quantityPerPage } setValue={ setQuantityPerPage } />
            <SelectTag setValue={ setTagsSelected } />
        </section>
    )
}

export default TagSelector