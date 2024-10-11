import React from 'react';
import s from "./components/Site.module.css";
import {Adidas} from "./components/pages/Adidas";
import {Abibas} from "./components/pages/Abibas";
import {Puma} from "./components/pages/Puma";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404";
import {NavWrapper} from "./components/_style";
import {Model} from "./components/pages/Model";


const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    ERROR404: '/error404',
}

function App() {
    return (
        <div>
            <div className={s.header}><h1>HEADER</h1></div>
            <div className={s.body}>
                <div className={s.nav}>
                    <NavWrapper><NavLink to={PATH.ADIDAS} className={({isActive}) => isActive ? s.active : s.navLink}>
                        Adidas</NavLink>
                    </NavWrapper>
                    <NavWrapper><NavLink to={PATH.PUMA} className={({isActive}) => isActive ? s.active : s.navLink}>
                        Puma</NavLink>
                    </NavWrapper>
                    <NavWrapper><NavLink to={PATH.ABIBAS} className={({isActive}) => isActive ? s.active : s.navLink}>
                        Abibas</NavLink>
                    </NavWrapper>
                </div>
                <div className={s.content}>
                    <Routes>
                        <Route path="/" element={<Navigate to={'/adidas'}/>}/>

                        <Route path={PATH.ADIDAS} element={<Adidas/>}/>
                        <Route path="/adidas/:id" element={<Model/>}/>
                        <Route path={PATH.PUMA} element={<Puma/>}/>
                        <Route path={PATH.ABIBAS} element={<Abibas/>}/>

                        <Route path={PATH.ERROR404} element={<Error404/>}/>
                        <Route path={'/*'} element={<Error404/>}/>

                    </Routes>
                </div>
            </div>
            <div className={s.footer}> abibas 2023</div>
        </div>
    );
}


export default App;
