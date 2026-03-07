import styles from './PrimaryButton.module.scss'

const PrimaryButton = ({src, text, onClick}) => {
  return (
    <button onClick={onClick}
    className={styles.addToCartBtn}>
      {src
      ? 
    <img className={styles.cartIcon} src={src} alt="cart icon" />
    : null
    }
      {text}</button>
  )
}

export default PrimaryButton