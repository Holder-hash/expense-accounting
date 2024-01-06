import './ExpenseGraph.scss';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { pieChart } from '../../../data/charts.js';
import { useEffect, useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseGraph = () => {

    const storageState = localStorage.getItem('userExpenseStorage');

    useEffect(() => {
        pieChart.labels = JSON.parse(storageState).labels
        pieChart.datasets[0].data = JSON.parse(storageState).data
        pieChart.datasets[0].backgroundColor = JSON.parse(storageState).background
        console.log(pieChart);
    }, [storageState])

    return (
        <div className='expanse-graph__container'>
            <Pie data={pieChart} style={{height: '95%'}}/>
        </div>
    )
}

export default ExpenseGraph;