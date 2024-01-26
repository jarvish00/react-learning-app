import { useState } from 'react'
import Card from './Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
function ExpenseItem(props) {
  const [title, changeTitle] = useState(props.title)
  const clickHandler = () => {
    changeTitle('updated')
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 className="expense-item h2">{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem
