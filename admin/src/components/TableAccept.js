import React from 'react';

function TableAccept() {
    const handleRemoveClick = (id) => {
        console.log(`Remove button clicked for item ${id}`);
        // Add your logic for removing the item here
    };

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
                    <tr>
                        <th>1</th>
                        <td>Optica de Esgueira</td>
                        <td>Esgueira</td>
                        <td>Rua Jose Luciano de Castro 155</td>
                        <td>3800-207</td>
                        <td>40.6473479</td>
                        <td>-8.6339323</td>
                        <td>
                            <button className="btn btn-secondary btn-square btn-xs " onClick={() => handleRemoveClick(1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </td>
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
                        <td>Locker FNAC Aveiro</td>
                        <td>Aveiro</td>
                        <td>R do Batalhao de Cacadores 10</td>
                        <td>3810-064</td>
                        <td>40.6410097</td>
                        <td>-8.6534492</td>
                        <td>
                            <button className="btn btn-secondary btn-square btn-xs" onClick={() => handleRemoveClick(2)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </td>
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

export default TableAccept;
