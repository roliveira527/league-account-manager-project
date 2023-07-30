import React from "react";
import '../Bashboard/Dashboard.css'

import Card from '../Card/Card';

import { motion } from 'framer-motion';

const Dashboard = () => {
    return (
        <motion.div className="dashboard" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}}>
            <div className='card-wrapper'>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            </div>
        </motion.div>
    )
}

export default Dashboard