import { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
    {
        key: 1,
        title: 'Car maintenance',
        date: new Date(2022, 1, 1),
        amount: '3',
    },
    {
        key: 2,
        title: 'Toiletries',
        date: new Date(2022, 4, 4),
        amount: '345',
    },
    {
        key: 3,
        title: 'New Desk',
        date: new Date(2023, 6, 19),
        amount: '234',
    },
    {
        key: 4,
        title: 'Car maintenance',
        date: new Date(2023, 3, 15),
        amount: '678',
    },
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const newExpenseHandler = (newExpense) => {
        setExpenses((prevValue) => {
            return [newExpense, ...prevValue ];
        });
    };

    return (
        <div>
            <NewExpense onNewExpense={newExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
};

export default App;
