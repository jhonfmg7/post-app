import React from 'react'

const ButtonPaginator = ({ element, condition, functionToClick }) => {
    return (
        <button 
            disabled={ condition } 
            onClick={ functionToClick } 
            className={ condition ? "paginator-button-disabled" : "paginator-button" }
        >
            { element }
        </button>
    )
}

export default ButtonPaginator