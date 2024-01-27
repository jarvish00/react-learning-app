import { React } from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'
import Card from './Card'
import classes from './ErrorModal.module.css'
const ErrorModal = (props) => {
  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClick}></div>
  }
  const ModalOverlay = (props) => {
    return (
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onClick}>Okay</Button>
        </footer>
      </Card>
    )
  }
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById('backdrop-root'),
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          onClick={props.onClick}
          message={props.message}
        />,
        document.getElementById('overlay-root'),
      )}
    </div>
  )
}
export default ErrorModal
