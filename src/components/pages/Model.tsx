import React from 'react';
import {adidasArr} from "./Adidas";
import {useParams} from "react-router-dom";


export const Model = () => {
    const params = useParams()
    return (
        <div>
            <div>Model</div>
                    <div>
                    {/*    <h2>{adidasArr(Number[params])}</h2>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <h2>{adidasArr.collection}</h2>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <h2>{adidasArr.price}</h2>*/}
                    </div>
        </div>
    )
}