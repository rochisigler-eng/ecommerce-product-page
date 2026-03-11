import { useState } from 'react'
import styles from './ImageDisplay.module.scss'
import Lightbox from '../../molecules/lightbox/Lightbox'
import rightArrow from "../../../../images/icon-next.svg"
import leftArrow from "../../../../images/icon-previous.svg"

const ImageDisplay = ({ products }) => {
  const [image, setImage] = useState("../../../images/image-product-1.jpg")
  const [imageId, setImageId] = useState(0)
  const [lightboxDisplay, setLightboxDisplay] = useState(false)

  const handleClick = (id) => {
    setImageId(id)
  }

  const nextImage = () => {
    let next = imageId + 1
    setImageId(next)
    if (next <= 3) {
      setImage(products[next].src)
    } else {
      setImage(products[0].src)
      setImageId(0)
    }
  }

  const previousImage = () => {
    let previous = imageId - 1
    setImageId(previous)
    if (previous > 0) {
      setImage(products[previous].src)
    } else {
      setImage(products[3].src)
      setImageId(3)
    }
  }

  return (
    <>
      <div className={styles.imageDisplayContainer}>
        <img src={image} alt="Product Image" className={styles.large} onClick={() => setLightboxDisplay(!lightboxDisplay)} />
        <div className={styles.mobileArrows}>
          <div className={styles.arrowMobileContainer} onClick={()=>previousImage()}>
            <img className={styles.arrowMobile} src={leftArrow} alt="previous arrow"  />
          </div>
          <div className={styles.arrowMobileContainer} onClick={()=>nextImage()}>
            <img lassName={styles.arrowMobile} src={rightArrow} alt="next arrow" />
          </div>
        </div>
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
          setLightboxDisplay={setLightboxDisplay}
          lightboxDisplay={lightboxDisplay}
          imageId={imageId}
          setImageId={setImageId}
        />
        : null
      }
    </>
  )
}

export default ImageDisplay