import styles from './PrimaryButton.module.scss'

const PrimaryButton = ({src}) => {
  return (
    <button className={styles.addToCartBtn}><img className={styles.cartIcon} src={src} alt="cart icon" />Add to cart</button>
  )
}

export default PrimaryButton