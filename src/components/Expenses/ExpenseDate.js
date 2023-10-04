import './ExpenseDate.css';

const ExpenseDate = ({ date }) => {
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.toLocaleString('default', { day: 'numeric' });
    const year = date.toLocaleString('default', { year: 'numeric' });

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date__yeaer'>{year}</div>
        </div>
    );
};

export default ExpenseDate;
