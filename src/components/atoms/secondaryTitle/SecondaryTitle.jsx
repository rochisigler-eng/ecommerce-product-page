import styles from './SecondaryTitle.module.scss'

const SecondaryTitle = ({text}) => {
  return (
    <h3 className={styles.secondaryTitle}>{text}</h3>
  )
}

export default SecondaryTitle