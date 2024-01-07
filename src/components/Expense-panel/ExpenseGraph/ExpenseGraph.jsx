import './ExpenseGraph.scss';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { pieChart } from '../../../data/charts.js';
import { useEffect, useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseGraph = (props) => {

    const [expenseData, setExpenseData] = useState({
        labels: [],
        data: [],
        background: []
    })

    const storageState = localStorage.getItem('userExpenseStorage');

    expenseData.labels = JSON.parse(storageState).labels;
    expenseData.data = JSON.parse(storageState).data;
    expenseData.background = JSON.parse(storageState).background;

    pieChart.labels = expenseData.labels;
    pieChart.datasets[0].data = expenseData.data;
    pieChart.datasets[0].backgroundColor = expenseData.background;

    useEffect(() => {
        setExpenseData(prev => {
            return {
                labels: [...prev.labels, props.newExpense.labels],
                data: [...prev.data, props.newExpense.data],
                background: [...prev.background, props.newExpense.background]
            }
        })
    }, [props.newExpense])
    console.log(pieChart);
    return (
        <div className='expanse-graph__container'>
            <Pie data={pieChart} style={{height: '95%'}} redraw={true}/>
        </div>
    )
}

export default ExpenseGraph;