import './Expense-panel.scss';
import ExpenseInput from './ExpenseInput/ExpenseInput.jsx';
import ExpenseGraph from './ExpenseGraph/ExpenseGraph.jsx';
import { useState } from 'react';

const ExpensePanel = (props) => {

    const [updateCounter, setUpdateCounter] = useState(0);

    // Эта функция будет обновлять компонент А
    const forceUpdateA = () => {
      setUpdateCounter(prevCounter => prevCounter + 1);
    };

    return (
        <div className='expanse-panel__body'>
            <div className='expanse-panel__linse'>
                <ExpenseGraph />
                <ExpenseInput forceUpdateA={forceUpdateA}/>
            </div>
        </div>
    )
}

export default ExpensePanel;