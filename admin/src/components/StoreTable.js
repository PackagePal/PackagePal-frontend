import React, { useEffect, useState } from "react";

const StoreTable = () => {
  const [data, setData] = useState([]);
  const [checkInMessage, setCheckInMessage] = useState('');

  const handleRemoveClick = (id) => {
    // Send a request to remove the item from the server/API
    fetch(`http://192.168.160.234:8080/api/v1/stores/${id}`, {
        method: "DELETE",
    })
        .then((res) => {
            if (res.status === 204) {
                // If the removal was successful, update the data state
                setData((prevData) => prevData.filter((item) => item.id !== id));
                setCheckInMessage("Store removed");
            }
        })
        .catch((error) => {
            console.error("Error removing item:", error);
        });
};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.160.234:8080/api/v1/stores/');
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
    <div className="overflow-x-auto">
      <div className="text-center mt-4 mb-4">
        <h2 className="text-2xl">{checkInMessage}</h2>
      </div>
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>Id</th>
            <th>eStore</th>
            <th>Contact</th>
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
};

export default StoreTable;
