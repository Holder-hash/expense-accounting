import './ExpenseInput.scss';
import categories from '../../../data/categories.json';
import { useRef, useState, useEffect } from 'react';

const ExpenseInput = (props) => {

    const expenseValue = useRef(null);
    const [expenseCategor, setExpenseCategory] = useState(null);
    
    function CategoryChangeHandler(category) {
        setExpenseCategory(() => category);
    }

    let storageLabels = JSON.parse(localStorage.getItem('userExpenseStorage')).labels
    let storageData = JSON.parse(localStorage.getItem('userExpenseStorage')).data

    const expenseSubmit = (e) => {
        e.preventDefault();
        if (!storageLabels.includes(expenseCategor)) {
            storageLabels.push(expenseCategor);
        }


        if (expenseValue.current.value && expenseCategor) {
            storageData.push(expenseValue.current.value)

            localStorage.setItem('userExpenseStorage', JSON.stringify({
                labels: storageLabels,
                data: storageData
            }));
        }
    }

    const clearBtnHandler = (e) => {
        e.preventDefault();
        expenseValue.current.value = null
        setExpenseCategory(null)
    }

    return (
        <div className='expanse-input__container'>
            <form onSubmit={expenseSubmit}>
                <input type="number" className='expanse-input__expense-inp' ref={expenseValue}/>

                <div className="expanse-input__categories">
                    
                    {Object.keys(categories).map((key, index) => {
                        const category = categories[key];
                        return (
                            <div key={index} style={{background: category.color}} onClick={() => CategoryChangeHandler(category.category)}>
                                <span class="material-symbols-outlined">
                                    {category.icon}
                                </span>
                            </div>
                        )
                    })}
                </div>

                <div className='expanse-input__footer'>
                    <button className='expanse-input__clear-btn' onClick={clearBtnHandler}>Очистить</button>
                    <input type="submit" className='expanse-input__submit-btn' value={'Готово'}/>
                </div>
            </form>
        </div>
    )
}

export default ExpenseInput;