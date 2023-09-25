import ExpenseDate from '../Expenses/ExpenseDate';
import '../Expenses/ExpenseItem.css';
import Card from '../UI/Card';
import React, { useState } from 'react';
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log(
    'This is evaluated 4 times as we have 4 of these components in App.js'
  );
  // state is evaluated in a per Component Instance basis.
  // props is a key value pair of attributes from app.js. props is an object
  const clickHandler = () => {
    setTitle('Updated');
    console.log('Clicked is evaluated once per state change.');
  };

  // JSX code:
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
