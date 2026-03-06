import styles from './Product.module.scss'
import Details from '../../molecules/details/Details'
import AddToCart from '../../molecules/add-to-cart/AddToCart'

const Product = ({discount, price, src}) => {
  return (
    <div className={styles.productContainer}>
      <Details
      discount={discount}
      price={price}
      />
      <AddToCart
      src = {src}
      />
    </div>
  )
}

export default Product