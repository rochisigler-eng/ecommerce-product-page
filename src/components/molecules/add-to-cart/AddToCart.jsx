import PrimaryButton from "../../atoms/primaryButton/PrimaryButton"
import QuantityButton from "../../atoms/quantityButton/QuantityButton"

const AddToCart = ({src}) => {
  return (
    <div>
      <QuantityButton />
      <PrimaryButton
      src = {src}
      />
    </div>
  )
}

export default AddToCart