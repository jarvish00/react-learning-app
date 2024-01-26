import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const saveExpenseDataHandler = (expenseData) => {
    const newExpense = {
      ...expenseData,
      id: Math.random.toString(),
    }
    console.log('In new expense', newExpense)
    props.onAddExpense(newExpense)
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}
export default NewExpense
