import React from "react";
import Navbar from "../components/Navbar";

function Admin() {
    return (
        <><Navbar /><div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "50vh" }}>
            <div style={{ alignSelf: "center" }}>
            <h3 className="text-4xl font-bold">Welcome!!</h3>
            </div>
        </div></>
    );
}

export default Admin;