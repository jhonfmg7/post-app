import React from 'react';

const ZoomImage = ({ item }) => {
    return (
        <section className="modal-component-container">
            <img src={ item?.image } layout="fill" className="card-image" alt="" />
            <p>{ item?.text }</p>
        </section>
    )
}

export default ZoomImage