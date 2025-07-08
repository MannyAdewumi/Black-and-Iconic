import React from 'react'
import {createBrowserRouter} from "react-router-dom";
import App from '../App';
import home from '../pages/home';

const router = createBrowserRouter ([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <home />
            },

            {
                path: "/images",
                element: <images />
            },
            {
                path: "/videos",
                element: <videos />
            },
            {
                path: "/login",
                element: <login />
            },
        ]

    },
]);
  

export default router