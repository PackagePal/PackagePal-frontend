import React, { useEffect, useState } from "react";

const Table = () => {
    const [data, setData] = useState([]);

    const [checkInMessage, setCheckInMessage] = useState('');

    const handleRemoveClick = (id) => {
        // Send a request to remove the item from the server/API
        fetch(`http://192.168.160.234:8080/api/v1/pickuppoints/${id}`, {
            method: "DELETE",
        })
            .then((res) => {
                if (res.status === 204) {
                    // If the removal was successful, update the data state
                    setData((prevData) => prevData.filter((item) => item.id !== id));
                    setCheckInMessage("Point removed");
                }
            })
            .catch((error) => {
                console.error("Error removing item:", error);
            });
    };

    const getCache = async () => {
        await fetch(`http://192.168.160.234:8080/api/v1/pickuppoints/`, {
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

    return (
        <div className="overflow-x-auto">
            <div className="text-center mt-4 mb-4">
                <h2 className="text-2xl">{checkInMessage}</h2></div>
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Postal Code</th>
                        <th>Lat</th>
                        <th>Long</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name || '-'}</td>
                            <td>{item.address || '-'}</td>
                            <td>{item.city || '-'}</td>
                            <td>{item.postalCode || '-'}</td>
                            <td>{item.lat || '-'}</td>
                            <td>{item.lng || '-'}</td>
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
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
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

export default Table;
