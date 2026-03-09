import { useState } from 'react'
import styles from './ImageDisplay.module.scss'
import Lightbox from '../../molecules/lightbox/Lightbox'

const ImageDisplay = ({ products }) => {
  const [image, setImage] = useState("../../../images/image-product-1.jpg")
  const [imageId, setImageId] = useState(0)
  const [lightboxDisplay, setLightboxDisplay] = useState(false)

  const handleClick = (id) => {
    setImageId(id)
  }

  return (
    <>
      <div className={styles.imageDisplayContainer}>
        <img src={image} alt="Product Image" className={styles.large} onClick={() => setLightboxDisplay(!lightboxDisplay)} />
        <div className={styles.thumbnail}>

          {
            products.map((product, index) => (

              <img
                key={index}
                src={product.thumbnail}
                alt="Product Image"
                className={imageId === index ? `${styles.active}` : `${styles.product}`}
                onClick={() => {
                  setImage(product.src)
                  handleClick(index)
                }}
              />

            ))
          }
        </div>
      </div >
      {lightboxDisplay
        ?
        <Lightbox
          products={products}
          setLightboxDisplay = {setLightboxDisplay}
          lightboxDisplay = {lightboxDisplay}
          imageId = {imageId}
          setImageId = {setImageId} 
        />
        : null
        }
    </>
  )
}

export default ImageDisplay