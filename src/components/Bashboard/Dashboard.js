import React from "react";
import '../Bashboard/Dashboard.css'

import Card from '../Card/Card';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className='card-wrapper'>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            </div>
        </div>
    )
}

export default Dashboard