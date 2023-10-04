import { useState } from 'react';
import './NewExpenseForm.css';

const NewExpenseForm = (props) => {
    const [titleValue, setTitleValue] = useState('');
    const [amountValue, setAmountValue] = useState('');
    const [dateValue, setDateValue] = useState('');
    const [isTitleValid, setIsTitleValid] = useState(true);
    const [isAmountValid, setIsAmountValid] = useState(true);
    const [isDateValid, setIsDateValid] = useState(true);

    const titleChangeHandler = (event) => {
        setTitleValue(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setAmountValue(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setDateValue(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        const expenseData = {
            title: titleValue,
            amount: amountValue,
            date: new Date(dateValue),
        };

        props.onSubmitExpenseData(expenseData);

        setTitleValue('');
        setAmountValue('');
        setDateValue('');
    };

    const validateForm = () => {
        setIsTitleValid(titleValue.trim());
        setIsAmountValid(amountValue.trim());
        setIsDateValid(dateValue.trim());

        return titleValue.trim() && amountValue.trim() && dateValue.trim();
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={titleValue}
                        onChange={titleChangeHandler}
                    />
                    {isTitleValid ? (
                        ''
                    ) : (
                        <p className='invalid-text'>Title is required</p>
                    )}
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        value={amountValue}
                        min='0.01'
                        step='0.01'
                        onChange={amountChangeHandler}
                    />
                    {isAmountValid ? (
                        ''
                    ) : (
                        <p className='invalid-text'>Invalid amount</p>
                    )}
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        value={dateValue}
                        min='2019-01-01'
                        max='2022-12-31'
                        onChange={dateChangeHandler}
                    />
                    {isDateValid ? (
                        ''
                    ) : (
                        <p className='invalid-text'>Date is required</p>
                    )}
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='reset' onClick={props.onCancel}>
                    Cancel
                </button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default NewExpenseForm;
