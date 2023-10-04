import { useState } from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

const NewExpense = (props) => {
    const [showExpenseForm, setShowExpenseForm] = useState(false);

    const saveExpenseHandler = (expense) => {
        const key = Math.random();
        expense = { key, ...expense };
        props.onNewExpense(expense);

        setShowExpenseForm(false);
    };

    const showFormHandler = () => {
        setShowExpenseForm(true);
    };

    const cancelFormHandler = () => {
        setShowExpenseForm(false);
    };

    return (
        <div className='new-expense'>
            {!showExpenseForm && (
                <button type='button' onClick={showFormHandler}>
                    Add Expense
                </button>
            )}
            {showExpenseForm && (
                <NewExpenseForm
                    onSubmitExpenseData={saveExpenseHandler}
                    onCancel={cancelFormHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;
