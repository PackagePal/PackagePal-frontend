import React, { useState } from 'react';

function TableAccept() {
    const [data, setData] = useState([
        {
            id: 1,
            name: 'Optica de Esgueira',
            city: 'Esgueira',
            address: 'Rua Jose Luciano de Castro 155',
            postalCode: '3800-207',
            lat: '40.6473479',
            long: '-8.6339323'
        },
        {
            id: 2,
            name: 'Locker FNAC Aveiro',
            city: 'Aveiro',
            address: 'R do Batalhao de Cacadores 10',
            postalCode: '3810-064',
            lat: '40.6410097',
            long: '-8.6534492'
        }
    ]);

    const [checkInMessage, setCheckInMessage] = useState('');

    const handleRemoveClick = (id) => {
        console.log(`Remove button clicked for item ${id}`);
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
        setCheckInMessage('Point Declined');
    };

    const handleAcceptClick = (id) => {
        console.log(`Accept button clicked for item ${id}`);
        // Add your logic for accepting the item here
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
        setCheckInMessage('Point Accepted');
    };

    return (
        <div className="overflow-x-auto">
            <div className="text-center mt-4 mb-4">
                <h2 className="text-2xl">{checkInMessage}</h2></div>
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>Postal Code</th>
                        <th>Lat</th>
                        <th>Long</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <th>{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.city}</td>
                            <td>{item.address}</td>
                            <td>{item.postalCode}</td>
                            <td>{item.lat}</td>
                            <td>{item.long}</td>
                            <td>
                                <button
                                    className="btn btn-secondary btn-square btn-xs"
                                    onClick={() => handleRemoveClick(item.id)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-accent btn-square btn-xs"
                                    onClick={() => handleAcceptClick(item.id)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
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

export default TableAccept;
