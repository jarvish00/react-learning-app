import './Expenses.css'
import { useState } from 'react'
import Card from './Card.js'
import ExpensesFilter from './ExpensesFilter.js'
import ExpensesList from './ExpensesList.js'
import ExpensesChart from './ExpensesChart.js'
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2019')
  const filterChangeHandler = (selectedYear) => {
    console.log('In Expenses')
    setFilteredYear(selectedYear)
  }
  const filteredExpense = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear,
  )

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpense} />
      <ExpensesList expenses={filteredExpense} />
    </Card>
  )
}
export default Expenses
