import { useState } from 'react';
import Card from '../Util/Card';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = (props) => {
    if (props.items.length === 0) {
        return (
            <Card className='expenses-list__fallback'>
                <h3>No expenses found.</h3>
            </Card>
        );
    }

    return (
        <ul className='expenses-list'>
            {props.items.map((item) => (
                <ExpenseItem key={item.key} expense={item} />
            ))}
        </ul>
    );
};

export default ExpenseList;
