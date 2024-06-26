import { BrowserRouter, Routes, Route } from "react-router-dom"
import Places from './components/Places.jsx'
import Notifications from './components/Notifications.jsx'
import AppIntegration from './components/AppIntegration.jsx'
import Translation from './components/Translation.jsx'

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
            <Routes>
                <Route path="/places" element={ <Places /> } />
                <Route path="/notifications" element={ <Notifications /> } />
                <Route path="/apps" element={ <AppIntegration /> } />
                <Route path="/translation" element={ <Translation /> } />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
