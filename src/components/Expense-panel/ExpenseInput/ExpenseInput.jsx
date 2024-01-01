import './ExpenseInput.scss';

const ExpenseInput = () => {
    return (
        <div className='expanse-input__container'>
            <form>
                <input type="number" className='expanse-input__expense-inp'/>
            </form>
        </div>
    )
}

export default ExpenseInput;