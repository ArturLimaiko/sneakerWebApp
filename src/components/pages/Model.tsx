import React from 'react';
import {adidasArr} from "./Adidas";
import {useParams} from "react-router-dom";


export const Model = () => {
    const params = useParams()
    const currentModel = adidasArr.find(el => el.id === Number(params.id))
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