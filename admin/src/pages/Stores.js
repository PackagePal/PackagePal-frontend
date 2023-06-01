import React from "react";
import Navbar from "../components/Navbar";
import StoreTable from "../components/StoreTable";
import { useNavigate } from 'react-router-dom';

function Stores() {
    const history = useNavigate();

    const handleClick = () => {
        console.log('Requests button clicked');
        history('/requestsaccept');
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-secondary mt-4 ml-8 mb-4" onClick={handleClick}>+</button>
                    </div>
                </div>
            </div>
            <div className="px-8 py-4">
                <StoreTable />
            </div>
        </>
    );
}

export default Stores;
