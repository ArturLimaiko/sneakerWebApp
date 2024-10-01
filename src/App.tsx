import React from 'react';
import s from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne";
import {PageThree} from "./components/pages/PageThree";
import {PageTwo} from "./components/pages/PageTwo";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404";

function App() {
    return (
        <div>
            <div className={s.header}><h1>HEADER</h1></div>
            <div className={s.body}>
                <div className={s.nav}>
                    <div><NavLink to={'/page1'} className={({isActive}) => isActive ? s.active : s.navLink}>Page
                        1</NavLink>
                    </div>
                    <div><NavLink to={'/page2'} className={({isActive}) => isActive ? s.active : s.navLink}>Page
                        2</NavLink>
                    </div>
                    <div><NavLink to={'/page3'} className={({isActive}) => isActive ? s.active : s.navLink}>Page
                        3</NavLink>
                    </div>
                </div>
                <div className={s.content}>
                    <Routes>
                        <Route path="/page1" element={<PageOne/>}/>
                        <Route path="/" element={<Navigate to={'/page1'}/>}/>

                        <Route path="/page2" element={<PageTwo/>}/>
                        <Route path="/page3" element={<PageThree/>}/>

                        <Route path="/error404" element={<Error404/>}/>
                        <Route path="/*" element={<Navigate to={'error404'}/>}/>
                    </Routes>
                </div>
            </div>
            <div className={s.footer}> abibas 2023</div>
        </div>
    );
}


export default App;
