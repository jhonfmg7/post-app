import React from 'react';
import { useSelector } from 'react-redux';

// Components
import ButtonPaginator from './ButtonPaginator';

// Material UI icons
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const arrNums = [ 1, 2, 3, 4, 5 ];

const Paginator = ({ page, setPage, quantityPerPage }) => {

    // Redux State Extraction
    const { quantity } = useSelector( state => state.app );

    return (
        <section className="paginator-container">
            <ButtonPaginator 
                element={ <SkipPreviousIcon /> } 
                condition={ page + 1 === arrNums[0] } 
                functionToClick={ () => setPage( oldPage => oldPage - 1) }
            />
            { arrNums.slice(0, Math.ceil(quantity/quantityPerPage)).map( (item, i) => (
                <ButtonPaginator 
                    key={ i }
                    element={ item } 
                    condition={ page + 1 === item } 
                    functionToClick={ () => setPage(item - 1) }
                />
            ) ) }
            <ButtonPaginator 
                    element={ <SkipNextIcon /> } 
                    condition={ page + 1 === arrNums[arrNums.length - 1] } 
                    functionToClick={ () => setPage( oldPage => oldPage + 1) }
                />
        </section>
    )
}

export default Paginator