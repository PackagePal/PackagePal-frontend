import React, { useState } from 'react';

function IncomingTable() {
    const [tableData, setTableData] = useState([
        {
            id: 1,
            trackingNumber: '1Z12345E0291980793',
            state: 'In Transit',
            name: 'António Ramos',
            contact: '961111111',
            provider: 'FedEx'
        },
        {
            id: 2,
            trackingNumber: 'LT987654321CN',
            state: 'Pending',
            name: 'Maria dos Ceus',
            contact: '961222222',
            provider: 'DLS'
        }
    ]);

    const [checkInMessage, setCheckInMessage] = useState('');

    const handleAcceptClick = (id) => {
        console.log(`Accept button clicked for item ${id}`);

        // Filter out the item with the matching ID from the table data array
        const updatedData = tableData.filter((item) => item.id !== id);

        // Update the table data state with the filtered array
        setTableData(updatedData);

        // Set the check-in message
        setCheckInMessage('Check-in done');
    };

    return (
        <div className="overflow-x-auto">
            <div className="text-center mt-4 mb-4">
            <h2 className="text-2xl">{checkInMessage}</h2></div>
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Tracking Number</th>
                        <th>State</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Delivery Service Provider</th>
                        <th>Check-in</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item) => (
                        <tr key={item.id}>
                            <th>{item.id}</th>
                            <td>{item.trackingNumber}</td>
                            <td>{item.state}</td>
                            <td>{item.name}</td>
                            <td>{item.contact}</td>
                            <td>{item.provider}</td>
                            <td>
                                <button className="btn btn-accent btn-square btn-xs" onClick={() => handleAcceptClick(item.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default IncomingTable;
