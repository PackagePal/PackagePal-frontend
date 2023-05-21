import React, { useState } from 'react';

function TableACP() {
    const [tableData, setTableData] = useState([
        {
            id: 1,
            trackingNumber: '1Z12345E0291980793',
            name: 'António Ramos',
            contact: '961111111',
            type: 'Magazine',
            eStore: 'Readly'
        },
        {
            id: 2,
            trackingNumber: 'LT987654321CN',
            name: 'Maria dos Ceus',
            contact: '961222222',
            type: 'Book',
            eStore: 'Bertrand'
        },
    ]);

    const [deliveredMessage, setDeliveredMessage] = useState('');

    const handleAcceptClick = (id) => {
        console.log(`Accept button clicked for item ${id}`);

        // Filter out the item with the matching ID from the table data array
        const updatedData = tableData.filter((item) => item.id !== id);

        // Update the table data state with the filtered array
        setTableData(updatedData);

        // Set the delivered message
        setDeliveredMessage('Collected!');
    };

    return (
        <div className="overflow-x-auto">
            {deliveredMessage && (
                <div className="text-center mt-4 mb-4">
                    <h2 className="text-2xl text-bg-accent"  te>{deliveredMessage}</h2>
                </div>
            )}
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Tracking Number</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Type</th>
                        <th>eStore</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item) => (
                        <tr key={item.id}>
                            <th>{item.id}</th>
                            <td>{item.trackingNumber}</td>
                            <td>{item.name}</td>
                            <td>{item.contact}</td>
                            <td>{item.type}</td>
                            <td>{item.eStore}</td>
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

export default TableACP;
