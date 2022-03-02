import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { getTagAction } from '../../../redux/actions/appActions';

const SuggestionsListComponent = ({ filteredSuggestions, activeSuggestionIndex, handleClick }) => {
    return filteredSuggestions.length ? (
        <ul className="suggestions">
            { filteredSuggestions.map( (suggestion, index) => {
                let className;
                if (index === activeSuggestionIndex) {
                    className = "suggestion-active";
                }
                return (
                    <li className={ className } key={ suggestion } onClick={ handleClick }>
                        { suggestion }
                    </li>
                );
            } ) }
        </ul>
    ) : (
        <div className="no-suggestions">
            <em>No existe esa categoría</em>
        </div>
    );
};

const SelectTag = ({ setValue }) => {

    // Dispatch Instance
    const dispatch = useDispatch();

    // Redux State Extraction
    const { authenticated } = useSelector( state => state.auth );
    const { tags } = useSelector( state => state.app );

    // Local State
    const [ filteredSuggestions, setFilteredSuggestions ] = useState([]);
    const [ activeSuggestionIndex, setActiveSuggestionIndex ] = useState(0);
    const [ showSuggestions, setShowSuggestions ] = useState(false);
    const [ input, setInput ] = useState("");

    const handleChange = (e) => {
        const userInput = e.target.value;
    
        // Filter our suggestions that don't contain the user's input
        const unLinked = tags.filter((tag) => tag.toLowerCase().indexOf(userInput.toLowerCase()) > -1);
    
        setInput(e.target.value);
        setFilteredSuggestions(unLinked);
        setActiveSuggestionIndex(0);
        setShowSuggestions(true);
    };

    const handleClick = (e) => {
        setFilteredSuggestions([]);
        setInput(e.target.innerText);
        setActiveSuggestionIndex(0);
        setShowSuggestions(false);
        setValue(e.target.innerText);
    };

    useEffect(() => {
        dispatch(getTagAction(authenticated))
    }, []);

    return (
        <section className="select-container">
            <label className="label-select" htmlFor="select-category">Categoría de Imágenes</label><br />
            <div className="autocomplete">
                <input 
                    id="select-category" 
                    type="text" 
                    placeholder="Categoría" 
                    className="finder-tag"
                    value={ input }
                    onChange={ e => handleChange(e) }
                />
                { showSuggestions && input && (
                    <SuggestionsListComponent 
                        filteredSuggestions={ filteredSuggestions } 
                        activeSuggestionIndex={ activeSuggestionIndex }
                        handleClick={ handleClick }
                    />
                ) }
            </div>
        </section>
    )
}

export default SelectTag