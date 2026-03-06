import ImageDisplay from "../../organisms/image-display/ImageDisplay"
import Header from "../../organisms/header/Header"
import Product from "../../organisms/product/Product"
import styles from './R01EcommerceProductPage.module.scss'

const R01EcommerceProductPage = () => {
  return (
    <>
      <Header
      src= "../../../images/icon-cart.svg"
      />
      <hr />
      <div className={styles.productContainer}>
        <ImageDisplay
          products={[
            {
              src: "../../../images/image-product-1.jpg",
              thumbnail: "../../../images/image-product-1-thumbnail.jpg"
            },
            {
              src: "../../../images/image-product-2.jpg",
              thumbnail: "../../../images/image-product-2-thumbnail.jpg"
            },
            {
              src: "../../../images/image-product-3.jpg",
              thumbnail: "../../../images/image-product-3-thumbnail.jpg"
            },
            {
              src: "../../../images/image-product-4.jpg",
              thumbnail: "../../../images/image-product-4-thumbnail.jpg"
            }]
          }
        />
        <Product
          discount= {50}
          price={250}
          src= "../../../images/icon-cart.svg"        
        />
      </div>
    </>
  )
}

export default R01EcommerceProductPage