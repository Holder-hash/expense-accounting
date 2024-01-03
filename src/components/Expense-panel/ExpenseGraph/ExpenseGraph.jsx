import './ExpenseGraph.scss';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { pieChart } from '../../../data/charts.js';
import { useEffect } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseGraph = (props) => {

    const storageData = localStorage.getItem('userExpenseStorage');

    useEffect(() => {
        pieChart.labels = JSON.parse(storageData).labels
        pieChart.data = JSON.parse(storageData).data
    }, [storageData])

    return (
        <div className='expanse-graph__container'>
            <Pie data={pieChart} style={{height: '95%'}}/>
        </div>
    )
}

export default ExpenseGraph;