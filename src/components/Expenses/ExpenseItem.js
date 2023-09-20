import ExpenseDate from '../Expenses/ExpenseDate';
import '../Expenses/ExpenseItem.css';
import Card from '../UI/Card';
import React from 'react';

export default function ExpenseItem(props) {
  // props is a key value pair of attributes from app.js

  // JSX code:
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );

  // equivalent under the hood React code that renders HTML on the UI:
  // return React.createElement(
  //   Card,
  //   { className: 'expense-item' },
  //   React.createElement(ExpenseDate, { date: props.date }),
  //   React.createElement(
  //     'div',
  //     { className: 'expense-item__description' },
  //     React.createElement('h2', {}, props.title),
  //     React.createElement(
  //       'div',
  //       { className: 'expense-item__price' },
  //       props.amount
  //     )
  //   )
  // );
}
