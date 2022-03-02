import React from 'react';

const options = [  5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

const SelectQuantity = ({ value, setValue }) => {

    return (
        <section className="select-container">
            <label className="label-select" htmlFor="select-quantity">Cantidad de Imágenes</label><br />
            <select
                id="select-quantity"
                className="select"
                value={ value }
                onChange={ e => setValue(e.target.value) }
            >
                <option value={ 0 } disabled>-- Selecciona Cantidad de Imagenes --</option>
                { options.map( item => (
                    <option key={ item } value={ item } className="option">{ item }</option>
                ) ) }
            </select>
        </section>
    )
}

export default SelectQuantity