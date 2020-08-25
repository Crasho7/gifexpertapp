import React, { useState, useEffect } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    //  useEffect(() => {
    //los helpers son funciones que hacen un trabajo en especifico que pueden recibir un argumento en especifico y retornan una informacion
    //que no hacen falta que redibujen el state

    //    getGifs(category).then(setImages)
    //}, [category]);

    return (
        <>
            <h3> {category} </h3>
            {loading ?
                <p className="animate__animated animate__flash">Loadig...</p>
                :
                <div className="card-grid animate__animated animate__fadeIn">
                    {
                        images.map((img) => (
                            <GifGridItem
                                key={img.id}
                                {...img}
                            />
                        ))
                    }
                </div>
            }
        </>
    )
}
