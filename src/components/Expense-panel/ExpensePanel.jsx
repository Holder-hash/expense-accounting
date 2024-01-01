import './Expense-panel.scss';
import ExpenseInput from './ExpenseInput/ExpenseInput.jsx';
import ExpenseGraph from './ExpenseGraph/ExpenseGraph.jsx'

const ExpensePanel = () => {
    return (
        <div className='expanse-panel__body'>
            <div className='expanse-panel__linse'>
                <ExpenseGraph />
                <ExpenseInput />
            </div>
        </div>
    )
}

export default ExpensePanel;