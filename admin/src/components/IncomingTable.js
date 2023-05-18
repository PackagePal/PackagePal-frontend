import React from "react";

function IncomingTable() {
    const handleAcceptClick = (id) => {
        console.log(`Accept button clicked for item ${id}`);
        // Add your logic for accepting the item here
    };

    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Tracking Number</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Delivery Service Provider</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>1Z12345E0291980793</td>
                        <td>António Ramos</td>
                        <td>961111111</td>
                        <td>FedEx</td>
                        <td>
                            <button className="btn btn-accent btn-square btn-xs" onClick={() => handleAcceptClick(1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>LT987654321CN</td>
                        <td>Maria dos Ceus</td>
                        <td>961222222</td>
                        <td>DLS</td>
                        <td>
                            <button className="btn btn-accent btn-square btn-xs" onClick={() => handleAcceptClick(2)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default IncomingTable;