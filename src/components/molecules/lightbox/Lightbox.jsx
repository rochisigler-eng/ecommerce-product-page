import styles from './Lightbox.module.scss'
import close from '../../../../images/icon-close.svg'
import { useState, useEffect } from 'react'
import next from '../../../../images/icon-next.svg'
import previous from '../../../../images/icon-previous.svg'

const Lightbox = ({ products, setLightboxDisplay, lightboxDisplay, setImageId, imageId }) => {
    const [image, setImage] = useState(products[imageId].src)
    
    const handleClick = (index) => {
        setImageId(index)
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

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            setLightboxDisplay(false)
        }
    }
    useEffect(() => {
        if (!lightboxDisplay) return
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    return (
        <>
            {
                lightboxDisplay
                    ?
                    <div className={styles.lightbox} onClick={()=> setLightboxDisplay(false)}>

                        <div className={styles.container} onClick={(e)=> e.stopPropagation()}>
                            <div className={styles.closeContainer} onClick={() => setLightboxDisplay(false)}>
                                <img className={styles.close} src={close} alt="" />
                            </div>
                            <img className={styles.large} src={image} alt="Product Image" />
                            <div className={styles.arrowContainer}>
                                <div className={styles.arrowBackground} onClick={() => previousImage()} >
                                    <img className={styles.arrow} src={previous} alt="previous arrow" />
                                </div>
                                <div className={styles.arrowBackground} onClick={() => nextImage()}>
                                    <img className={styles.arrow} src={next} alt="next arrow" />
                                </div>
                            </div>
                            <div className={styles.smallContainer}>
                                {
                                    products.map((product, index) => (
                                        <img
                                            key={index}
                                            className={imageId === index ? `${styles.active}` : `${styles.small}`}
                                            src={product.thumbnail}
                                            alt="Product Image"
                                            onClick={() => {
                                                setImage(product.src)
                                                handleClick(index)
                                            }}
                                        />

                                    ))
                                }

                            </div>
                        </div>
                    </div>
                    : null
            }

        </>
    )
}

export default Lightbox