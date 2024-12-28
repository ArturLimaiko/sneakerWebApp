import * as React from "react";
import {createBrowserRouter,} from "react-router-dom";
import App from "../App";
import {Error404} from "../components/pages/Error404";
import {Adidas} from "../components/pages/Adidas";
import {Puma} from "../components/pages/Puma";
import {Abibas} from "../components/pages/Abibas";
import {Prices} from "../components/pages/Prices";
import {Model} from "../components/pages/Model";

const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICES: '/prices',
    ERROR404: '/error404',
    MODEL: '/:model/:id'

} as const

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>, // то что лежит в корне
        errorElement: <Error404/>,//обработка ошибки
        children: [ // тут все наши Route
            {
                path: PATH.ADIDAS,
                element: <Adidas/>,
            },
            {
                path: PATH.PUMA,
                element: <Puma/>
            },
            {
                path: PATH.ABIBAS,
                element: <Abibas/>
            },
            {
                path: PATH.PRICES,
                element: <Prices/>
            },
            {
                path: PATH.ERROR404,
                element: <Error404/>
            },
            {
                path: PATH.MODEL,
                element: <Model/>
            },
        ]
    }
]);