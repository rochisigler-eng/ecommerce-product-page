import styles from './Text.module.scss'

const Text = ({text}) => {
  return (
    <p className={styles.para}>{text}</p>
  )
}

export default Text