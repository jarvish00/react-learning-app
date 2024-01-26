import { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
  //maintaning state with single object
  // const [expenseInput, setExpenseInput] = useState({
  //   enteredTitle: '',
  //   enteredDate: '',
  //   enteredAmount: '',
  // })
  // const titleChangeHandler = (event) => {
  //   setEnteredTitle({
  //     ...expenseInput,
  //     enteredTitle: event.target.value,
  //   })
  // }
  //when update is depend on prev value the best way to do is following
  // const titleChangeHandler = (event) => {
  //   setExpenseInput((prevState) => {
  //     return { ...prevState, enteredTitle: event.target.value }
  //   })
  // }
  // const dateChangeHandler = (event) => {
  //   setEnteredDate({
  //     ...expenseInput,
  //     enteredDate: event.target.value,
  //   })
  // }
  // const amountChangeHandler = (event) => {
  //   setEnteredAmount({
  //     ...expenseInput,
  //     enteredAmount: event.target.value,
  //   })
  // }
  const [enteredTitle, setEnteredTitle] = useState('')
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }
  const [enteredDate, setEnteredDate] = useState('')
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  }
  const [enteredAmount, setEnteredAmount] = useState('')
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  }
  const submitEventHandler = (event) => {
    event.preventDefault()
    console.log(
      enteredTitle +
        ' is added with amount ' +
        enteredAmount +
        ' on ' +
        enteredDate,
    )
    const newExpense = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }
    props.onSaveExpenseData(newExpense)
    setEnteredTitle('')
    setEnteredDate('')
    setEnteredAmount('')
  }
  return (
    <form onSubmit={submitEventHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control ">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  )
}
export default ExpenseForm
