import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Glasses from './Glasses';
import Places from './Places';
import Notifications from './Notifications';
import AppIntegration from './AppIntegration';
import Translation from './Translation';

import "../style/App.css";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Glasses /> }>
                    <Route path="places" element={ <Places /> } />
                    <Route path="notifications" element={ <Notifications /> } />
                    <Route path="apps" element={ <AppIntegration /> } />
                    <Route path="translation" element={ <Translation /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}


export default App;
