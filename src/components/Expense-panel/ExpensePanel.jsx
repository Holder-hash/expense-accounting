import './Expense-panel.scss';
import ExpenseInput from './ExpenseInput/ExpenseInput.jsx';
import ExpenseGraph from './ExpenseGraph/ExpenseGraph.jsx';
import { useState, useEffect } from 'react';

const ExpensePanel = () => {

    const [expenseData, setExpenseData] = useState({
        labels: [],
        data: [],
        background: [],
    })

    const onSubmit = (getExpenseData) => {
        setExpenseData({
            labels: getExpenseData.labels,
            data: getExpenseData.data,
            background: getExpenseData.background,
        })
    }

    return (
        <div className='expanse-panel__body'>
            <div className='expanse-panel__linse'>
                <ExpenseGraph newExpense={expenseData}/>
                <ExpenseInput onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default ExpensePanel;