import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import GraphState from '../components/GraphState';
import { useState } from 'react';
import { UserData } from './Data';
import { PointsData } from './DataPoints';
import GraphPoints from '../components/GraphPoints';
function Statistics() {
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
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

    const getCache2 = async () => {
        await fetch(`http://localhost:8080/api/v1/pickuppoints/`, {
        })
            .then((res) => {
                if (res.status === 200) return res.json();
            })
            .then((data) => {
                setData2(data);
            });
    };



    useEffect(() => {
        getCache();
        getCache2();
    }, []);
    const [chartData, setChartData] = useState({
        labels: UserData.map((data) => data.state),
        datasets: [
            {
                label: 'Number of packages in each state',
                data: [],
                backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#00FF00"],
            }
        ]
    })

    const [chartData2, setChartData2] = useState({
        labels: PointsData.map((data) => data.city),
        datasets: [
            {
                label: 'Points per city',
                data: [],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#00FF00"],
            }
        ]
    })

    useEffect(() => {
        setChartData({
            labels: UserData.map((data) => data.state),
            datasets: [
                {
                    label: 'Number of packages in each state',
                    data: data.reduce((prev, current) => {
                        console.log(current)
                        if (current.status === "DELIVERED") {
                            prev[0] += 1;
                        }
                        if (current.status === "PENDING") {
                            prev[1] += 1;
                        }
                        if (current.status === "COLLECTED") {
                            prev[3] += 1;
                        }
                        if (current.status === "IN_TRANSIT") {
                            prev[2] += 1;
                        }

                        return prev;
                    }, [0, 0, 0, 0]),
                    backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#00FF00"],
                }
            ]
        })
    }, [data]);

    useEffect(() => {
        const perCity = data2.reduce((prev, current) => {
            if (Object.keys(prev).indexOf(current.city) !== -1) {
                prev[current.city] += 1;
            } else {
                prev[current.city] = 1;
            }

            console.log(prev)

            return { ...prev }
        }, {})
        setChartData2({
            labels: Object.keys(perCity),
            datasets: [
                {
                    label: 'Number of packages in each state',
                    data: Object.values(perCity),
                    backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#00FF00"],
                }
            ]
        })
    }, [data2]);




    return (
        <><Navbar />
            <div className="overflow-x-auto py-8" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ alignSelf: "center" }}>
                    <h3 className="text-2xl font-bold">Number of packages in each state</h3>
                </div>
                <div style={{ width: 500, height: 400 }}>
                    <GraphState chartData={chartData} />
                </div>

                <h3 className="text-2xl font-bold">Points per city</h3>
                <div style={{ width: 400, height: 400 }}>
                    <GraphPoints chartData={chartData2} />
                </div>
            </div>
        </>

    )
}
export default Statistics;