import styles from './Text.module.scss'

const Text = ({content}) => {
  return (
    <p className={styles.para}>{content}</p>
  )
}

export default Text