import React, { useState } from 'react'

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = props => {

    const [categories, setCategories] = useState(['Bob Esponja']);

    // const handleAdd = (evt) => setCategories([...categories, 'Dorohedoro']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />

            <hr />
            <ol>
                { //solo recibe expresiones de js que retornen algo
                    categories.map(category => (
                        <GifGrid
                            category={category}
                            key={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}
