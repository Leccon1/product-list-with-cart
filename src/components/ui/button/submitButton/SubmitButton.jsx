import style from './submitButton.module.scss'

const SubmitButtom = ({ children }) => {
  return (
    <button className={style.submitButton} type="submit">
      {children}
    </button>
  )
}

export default SubmitButtom
