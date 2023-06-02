import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const StoreAccept = () => {
    const history = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://192.168.160.234:8080/api/v1/stores/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                }),
            });
            let resJson = await res.json();
            if (res.status === 201) {
                setName("");
                setEmail("");
                history('/stores');
            } else {
                setError("Could not create new Store!")
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
                            eStore:
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
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                            Contact:
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
};

export default StoreAccept;
