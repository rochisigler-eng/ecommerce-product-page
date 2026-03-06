import styles from './Product.module.scss'
import Details from '../../molecules/details/Details'
import AddToCart from '../../molecules/add-to-cart/AddToCart'

const Product = ({discount, price}) => {
  return (
    <div className={styles.productContainer}>
      <Details
      discount={discount}
      price={price}
      />
      <AddToCart />
    </div>
  )
}

export default Product