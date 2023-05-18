import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

function Admin() {
    return (
        <><Navbar /><div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "50vh" }}>
            <div style={{ alignSelf: "center" }}>
                <Search />
            </div>
        </div></>
    );
}

export default Admin;