import React, { useState } from "react";

function Deliveries() {
  const [data, setData] = useState([
    {
      id: 1,
      trackingNumber: '1Z12345E0291980793',
      name: 'António Ramos',
      contact: '961111111',
      status: 'Delivered',
      type: 'Magazine',
      eStore: 'Readly',
    },
    {
      id: 2,
      trackingNumber: 'LT987654321CN',
      name: 'Maria dos Ceus',
      contact: '961222222',
      status: 'Delivered',
      type: 'Book',
      eStore: 'Bertrand',
    },
  ]);

  return (
    <div className="overflow-x-auto">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th>Tracking Number</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Status</th>
            <th>Type</th>
            <th>eStore</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <th>{item.id}</th>
              <td>{item.trackingNumber}</td>
              <td>{item.name}</td>
              <td>{item.contact}</td>
              <td>{item.status}</td>
              <td>{item.type}</td>
              <td>{item.eStore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Deliveries;
