import React from 'react';
import Navbar from '../components/Navbar';
import GraphState from '../components/GraphState';
import { useState } from 'react';
import { UserData } from './Data';
import { PointsData } from './DataPoints';
import GraphPoints from '../components/GraphPoints';
function Statistics() {
    const [chartData, setChartData] = useState({
        labels: UserData.map((data) => data.state),
        datasets: [
            {
                label: 'Number of packages in each state',
                data: UserData.map((data) => data.value),
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#00FF00"],
            }
        ]
    })

    const [chartData2, setChartData2] = useState({
        labels: PointsData.map((data) => data.city),
        datasets: [
            {
                label: 'Points per city',
                data: PointsData.map((data) => data.points),
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#00FF00"],
            }
        ]
    })

    return (
        <><Navbar />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ alignSelf: "center" }}>
                    <h3 className="text-2xl font-bold">Number of packages in each state</h3>
                </div>
                <div style={{ width: 700, height: 600 }}>
                    <GraphState chartData={chartData} />
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h3 className="text-2xl font-bold">Points per city</h3>
                <div style={{ width: 550, height: 550 }}>
                    <GraphPoints chartData={chartData2} />
                </div>
            </div>

        </>

    )
}
export default Statistics;