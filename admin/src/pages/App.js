import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Points from './Points';
import Statistics from './Statistics';
import Stores from './Stores';
import Login from "../components/Login";
import Admin from "./Admin";
import Requests from "./Requests";
import ACP from "./ACP";
import Incoming from "./Incoming";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/requests" element={<Requests/>}/>
                <Route path="/acp" element={<ACP/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/points" element={<Points/>}/>
                <Route path="/statistics" element={<Statistics/>}/>
                <Route path="/stores" element={<Stores/>}/>
                <Route path="/incoming" element={<Incoming/>}/>
            </Routes>
        </Router>
    );
}

export default App;
