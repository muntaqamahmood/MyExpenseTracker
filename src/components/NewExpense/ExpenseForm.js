import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // alternative approach by using only 1 state instead of 3
  // const [userInput, setUserInput] = useState('');
  // useState({
  //   enteredTitle: '',
  //   enteredDate: '',
  //   enteredAmount: '',
  // });
  // function userInputChangeHandler(event) {
  // setUserInput({
  //   ...userInput,
  //   enteredDate: event.target.value,
  // });
  // alternative to updating only one state out of the 3:
  // }
  // function titleChangeHandler(event) {
  //   setEnteredTitle(event.target.value);
  // }
  // function amountChangeHandler(event) {
  //   setEnteredAmount(event.target.value);
  // }
  // function dateChangeHandler(event) {
  //   setEnteredDate(event.target.value);
  // }

  const inputChangeHandler = (identifier, value) => {
    if (identifier === 'title') {
      setEnteredTitle(value);
    } else if (identifier === 'amount') {
      setEnteredAmount(value);
    } else {
      setEnteredDate(value);
    }
  };
  //automatically gets event object from browser
  const submitHandler = (event) => {
    // now page doesnt reload as we prevented default behaviour
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenseData); instead pass from child to parent
    props.onSaveExpenseData();

    // by using state, we do 2-way binding, by resetting the values of inputs:
    // this lets us gather input and also change it
    setEnteredAmount();
    setEnteredDate();
    setEnteredTitle();
  };

  // form emits a submit event once form is clicked to submit via a submit btn
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={(event) =>
              inputChangeHandler('title', event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={(event) =>
              inputChangeHandler('amount', event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2033-12-31"
            onChange={(event) => inputChangeHandler('date', event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
