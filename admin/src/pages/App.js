import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Points from './Points';
import Statistics from './Statistics';
import Stores from './Stores';
import Login from "../components/Login";
import Admin from "./Admin";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/points" element={<Points/>}/>
                <Route path="/statistics" element={<Statistics/>}/>
                <Route path="/stores" element={<Stores/>}/>
            </Routes>
        </Router>
    );
}

export default App;
