import React from "react";
import IncomingTable from "../components/IncomingTable";

function Incoming(){
    return(
        <><h1 style={{ fontSize: '3rem', textAlign: 'center', color: '(var(--n)' }}>Incoming Deliveries</h1><div className="px-8 py-4">
            <IncomingTable/>
        </div></>
    );

}
export default Incoming;