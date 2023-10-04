import { useState } from 'react';
import Card from '../Util/Card';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const expenseFilterChangeHandler = (selectedFilter) => {
        setFilteredYear(selectedFilter);
    };

    const filteredExpenses = props.items.filter((item) => {
        return (
            item.date.getFullYear().toString() === filteredYear ||
            filteredYear === 'all'
        );
    });

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter
                    items={props.items}
                    selected={filteredYear}
                    onExpenseFilterChange={expenseFilterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpenseList items={filteredExpenses} />
            </Card>
        </div>
    );
};

export default Expenses;
