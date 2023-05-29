import React, { useEffect, useState } from 'react';

const TableACP = () => {
    const [data, setData] = useState([]);
    const getCache = async () => {
        await fetch(`http://localhost:8080/api/v1/packages/`, {
        })
            .then((res) => {
                if (res.status === 200) return res.json();
            })
            .then((data) => {
                setData(data);
            });
    };

    useEffect(() => {
        getCache();
    }, []);

    const [deliveredMessage, setCheckInMessage] = useState('');

    const handleAcceptClick = (id) => {
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
        setCheckInMessage('Collected');
    };

    return (
        <div className="overflow-x-auto">
            {deliveredMessage && (
                <div className="text-center mt-4 mb-4">
                    <h2 className="text-2xl text-bg-accent" te>{deliveredMessage}</h2>
                </div>
            )}
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Tracking Number</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Status</th>
                        <th>eStore</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.packageId || '-'}</td>
                            <td>{item.userName || '-'}</td>
                            <td>{item.userEmail || '-'}</td>
                            <td>{item.status || '-'}</td>
                            <td>{item.store.name || '-'}</td>
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
