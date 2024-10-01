import React from 'react';
import s from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne";
import {PageThree} from "./components/pages/PageThree";
import {PageTwo} from "./components/pages/PageTwo";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404";
import {NavWrapper} from "./components/_style";


const PATH = {
    PAGE1: '/page1',
    PAGE2: '/page2',
    PAGE3: '/page3',
    ERROR404: '/error404',
}

function App() {
    return (
        <div>
            <div className={s.header}><h1>HEADER</h1></div>
            <div className={s.body}>
                <div className={s.nav}>
                    <NavWrapper><NavLink to={'/page1'} className={({isActive}) => isActive ? s.active : s.navLink}>Page
                        1</NavLink>
                    </NavWrapper>
                    <NavWrapper><NavLink to={'/page2'} className={({isActive}) => isActive ? s.active : s.navLink}>Page
                        2</NavLink>
                    </NavWrapper>
                    <NavWrapper><NavLink to={'/page3'} className={({isActive}) => isActive ? s.active : s.navLink}>Page
                        3</NavLink>
                    </NavWrapper>
                </div>
                <div className={s.content}>
                    <Routes>
                        <Route path={PATH.PAGE1} element={<PageOne/>}/>
                        <Route path="/" element={<Navigate to={'/page1'}/>}/>

                        <Route path={PATH.PAGE2} element={<PageTwo/>}/>
                        <Route path={PATH.PAGE3} element={<PageThree/>}/>

                        <Route path={PATH.ERROR404} element={<Error404/>}/>
                        <Route path="/*" element={<Navigate to={'error404'}/>}/>
                    </Routes>
                </div>
            </div>
            <div className={s.footer}> abibas 2023</div>
        </div>
    );
}


export default App;
