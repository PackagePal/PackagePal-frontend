import React, { useState } from "react";
function StoreTable(){

    const [data, setData] = useState([
        {
            id: 1,
            eStore: "Readly",
            products: "Books"
        },
        {
            id: 2,
            eStore: "Worten",
            products: "Electronics"
        },
    ]);

    const [checkInMessage, setCheckInMessage] = useState('');

    const handleRemoveClick = (id) => {
        // Remove the item with the given id from the data array
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
        // Set the "Point removed" message
        setCheckInMessage('eStore removed');
    };
    return (
        <div className="overflow-x-auto">
            <div className="text-center mt-4 mb-4">
                <h2 className="text-2xl">{checkInMessage}</h2></div>
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>eStore</th>
                        <th>Products</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <th>{item.id}</th>
                            <td>{item.eStore}</td>
                            <td>{item.products}</td>
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
    )
}
export default StoreTable;