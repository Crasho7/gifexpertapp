import React, { useState } from 'react'

import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => setInputValue(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            //como se tiene el valor de referencia se puede hacer un callback para no tener que pasar todo el objeto 
            setCategories(categories => [inputValue, ...categories]);

            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}