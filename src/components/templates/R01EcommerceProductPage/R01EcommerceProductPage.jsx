import ImageDisplay from "../../organisms/image-display/ImageDisplay"
import Header from "../../organisms/header/Header"
import Product from "../../organisms/product/Product"
import styles from './R01EcommerceProductPage.module.scss'

const R01EcommerceProductPage = () => {
  return (
    <>
      <Header />
      <hr />
      <div className={styles.productContainer}> 
      <ImageDisplay />
      <Product />
      </div>
    </>
  )
}

export default R01EcommerceProductPage