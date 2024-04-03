import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Glasses from './components/Glasses';
import Places from './components/Places';
import Notifications from './components/Notifications';
import AppIntegration from './components/AppIntegration';
import Translation from './components/Translation';

import './style/App.css';


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
