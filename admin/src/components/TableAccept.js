import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const TableAccept = () => {
    const history = useNavigate();

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [lat, setLat] = useState(0.0);
    const [lng, setLng] = useState(0.0);
    const [error, setError] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://192.168.160.234:8080/api/v1/pickuppoints/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    address: address,
                    city: city,
                    postalCode: postalCode,
                    lat: lat,
                    lng: lng
                }),
            });
            let resJson = await res.json();
            if (res.status === 201) {
                setName("");
                setAddress("");
                setCity("");
                setPostalCode("");
                setLat("");
                setLng("");
                history('/points');
            } else {
                setError("Could not create new Pickup!")
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div className="flex justify-center items-center pt-20 h-screen">
                <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                            Name:
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
                            Address:
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                            id="address"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="city" className="block text-gray-700 font-bold mb-2">
                            City:
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                            id="city"
                            name="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="postalCode" className="block text-gray-700 font-bold mb-2">
                            Postal Code:
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                            id="postalCode"
                            name="postalCode"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="lat" className="block text-gray-700 font-bold mb-2">
                            Latitude:
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                            id="lat"
                            name="lat"
                            value={lat}
                            onChange={(e) => setLat(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="lng" className="block text-gray-700 font-bold mb-2">
                            Longitude:
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                            id="lng"
                            name="lng"
                            value={lng}
                            onChange={(e) => setLng(e.target.value)}
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="btn btn-active btn-secondary"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                <p>{error}</p>
            </div>
        </>
    );
}

export default TableAccept;
