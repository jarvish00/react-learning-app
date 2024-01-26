import './Expenses.css'
import { useState } from 'react'
import ExpenseItem from './ExpenseItem.js'
import Card from './Card.js'
import ExpensesFilter from './ExpensesFilter.js'
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2019')
  const filterChangeHandler = (selectedYear) => {
    console.log('In Expenses')
    setFilteredYear(selectedYear)
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      />
    </Card>
  )
}
export default Expenses
