import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Deliveries = () =>{
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

  return (
    <><Navbar /><div className="overflow-x-auto">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th>Tracking Number</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Status</th>
            <th>pickupPoint</th>
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
              <td>{item.pickupPoint.address || '-'}</td>
              <td>{item.store.name || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div></>
  );
}

export default Deliveries;
