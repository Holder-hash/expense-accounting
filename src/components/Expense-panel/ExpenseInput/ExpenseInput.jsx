import './ExpenseInput.scss';
import categories from '../../../data/categories.json'

const ExpenseInput = () => {
    return (
        <div className='expanse-input__container'>
            <form>
                <input type="number" className='expanse-input__expense-inp'/>

                <div className="expanse-input__categories">
                    {Object.keys(categories).map((key, index) => {
                        return (
                            <div key={index}>
                                <p>{key}: {index}</p>
                            </div>
                        )
                    })}
                </div>

                <div className='expanse-input__footer'>
                    <button className='expanse-input__clear-btn'>Очистить</button>
                    <input type="submit" className='expanse-input__submit-btn' value={'Готово'}/>
                </div>
            </form>
        </div>
    )
}

export default ExpenseInput;