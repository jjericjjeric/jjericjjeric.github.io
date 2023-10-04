import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../Util/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.expense.title);

    const updateTitle = () => {
        setTitle('Updated!');
    };

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.expense.date} />
                <div className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className='expense-item__price'>
                        ${props.expense.amount}
                    </div>
                </div>
                {/* <button onClick={updateTitle}>Update Title!</button> */}
            </Card>
        </li>
    );
};

export default ExpenseItem;
