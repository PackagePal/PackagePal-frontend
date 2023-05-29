import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const StoreAccept = () => {
    const [data, setData] = useState([]);

    const [checkInMessage, setCheckInMessage] = useState('');

    const handleRemoveClick = (id) => {
        console.log(`Remove button clicked for item ${id}`);
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
        setCheckInMessage('eStore Declined');
    };

    const handleAcceptClick = (id) => {
        console.log(`Accept button clicked for item ${id}`);
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
        setCheckInMessage('eStore Accepted');
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/v1/stores/');
                if (response.status === 200) {
                    const data = await response.json();
                    setData(data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <><Navbar /><div className="overflow-x-auto">
            <div className="text-center mt-4 mb-4">
                <h2 className="text-2xl">{checkInMessage}</h2></div>
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>eStore</th>
                        <th>Contact</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name || '-'}</td>
                            <td>{item.email || '-'}</td>
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
        </div></>
    );
}

export default StoreAccept;