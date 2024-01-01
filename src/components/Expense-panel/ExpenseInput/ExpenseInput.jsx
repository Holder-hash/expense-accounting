import './ExpenseInput.scss';
import categories from '../../../data/categories.json'

const ExpenseInput = () => {
    return (
        <div className='expanse-input__container'>
            <form>
                <input type="number" className='expanse-input__expense-inp'/>

                <div className="expanse-input__categories">
                    
                    {Object.keys(categories).map((key, index) => {
                        const category = categories[key];
                        return (
                            <div key={index} style={{background: category.color}}>
                                <span class="material-symbols-outlined">
                                    {category.icon}
                                </span>
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