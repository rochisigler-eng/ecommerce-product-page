import styles from './Lightbox.module.scss'
import close from '../../../../images/icon-close.svg'
import { useState } from 'react'
import next from '../../../../images/icon-next.svg'
import previous from '../../../../images/icon-previous.svg'

const Lightbox = ({ products }) => {
    const [image, setImage] = useState(products[0].src)
    const [lightboxDisplay, setLightboxDisplay] = useState(true)

    const handleClick = ({ index }) => {
        setImage(index)
    }
    return (
        <>
            {
                lightboxDisplay
                    ?
                    <div className={styles.lightbox} >

                        <div className={styles.container}>
                            <div className={styles.closeContainer}>
                                <img className={styles.close} src={close} alt="" />
                            </div>
                            <img className={styles.large} src={image} alt="Product Image" />
                            <div className={styles.arrowContainer}>
                                <div className={styles.arrowBackground} >
                                <img className={styles.arrow} src={previous} alt="previous arrow" />
                                </div>
                                <div className={styles.arrowBackground}>
                                <img className={styles.arrow} src={next} alt="next arrow" />
                                </div>
                            </div>
                            <div className={styles.smallContainer}>
                                {
                                    products.map((product, index) => (
                                        <img
                                            key={index}
                                            className={styles.small}
                                            src={product.thumbnail}
                                            alt="Product Image"
                                            onClick={() => {
                                                setImage(product.src)
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