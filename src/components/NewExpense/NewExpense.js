import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'

const NewExpense = (props) => {
  const [visibleNewForm, setVisibleNewForm] = useState(true)
  const saveExpenseDataHandler = (expenseData) => {
    const newExpense = {
      id: Math.random().toLocaleString(),
      ...expenseData,
    }
    console.log('In new expense', newExpense)
    props.onAddExpense(newExpense)
    setVisibleNewForm(!visibleNewForm)
  }
  const visibleNewFormHandler = () => {
    setVisibleNewForm((prevState) => {
      return !prevState
    })
  }
  return (
    <div className="new-expense">
      {visibleNewForm && (
        <button onClick={visibleNewFormHandler}>Add New Expense</button>
      )}
      {!visibleNewForm && (
        <ExpenseForm
          onVisibleNewFormHandler={visibleNewFormHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  )
}
export default NewExpense
