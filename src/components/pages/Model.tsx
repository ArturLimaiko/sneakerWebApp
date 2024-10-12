import React from 'react';
import {adidasArr, AdidasItem} from "./Adidas";
import {pumaArr, PumaItem} from "./Puma";
import {useParams} from "react-router-dom";


export type ModelType = {
    [key: string]: (AdidasItem[] | PumaItem[]);
}

//объект, который содержит два свойства: puma и adidas.
//Каждое из этих свойств представляет собой массив объектов типа PumaItem[] или AdidasItem[].
const crossModels: ModelType = {
    puma: pumaArr,
    adidas: adidasArr
}

export const Model = () => {
    const {model, id} = useParams()

    const currentModel = model
        // доступ к значению объекта crossModels по ключу, который хранится в переменной model.
        ? crossModels[model].find(el => el.id === Number(id))
        : null

    return (
        <div>
            {currentModel
                ? <div>
                    <div>Model</div>
                    <div>
                        <h2>{currentModel.model}</h2>
                        <h2>{currentModel.collection}</h2>
                        <h2>{currentModel.price}</h2>
                    </div>
                    <div>
                        <img src={currentModel.picture} width='400px' height='auto'
                             alt={currentModel.model}/>
                    </div>
                </div>
                : <h2>Not found</h2>
            }
        </div>
    )
}