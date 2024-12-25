import * as React from "react";
import {createBrowserRouter,} from "react-router-dom";
import App from "../App";
import {Error404} from "../components/pages/Error404";
import {Adidas} from "../components/pages/Adidas";

const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICES: '/prices',
    ERROR404: '/error404',
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>, // то что лежит в корне
        errorElement: <Error404/> ,//обработка ошибки
        children: [ // тут все наши Route
            {
                path: PATH.ADIDAS,
                element: <Adidas/>,
            },

        ]
    }
]);