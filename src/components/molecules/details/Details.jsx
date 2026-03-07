import Title from "../../atoms/title/Title"
import SecondaryTitle from "../../atoms/secondaryTitle/SecondaryTitle"
import Text from "../../atoms/text/Text"
import Cost from "../cost/Cost"

const Details = ({ priceDiscount, price, priceTotal, item }) => {
    return (
        <div>
            <SecondaryTitle
                text={"sneaker company"}
            />
            <Title
                text={item}
            />
            <Text
                text={"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer."}
            />
            <Cost
                priceDiscount={priceDiscount}
                price={price}
                priceTotal={priceTotal}
            />
        </div>
    )
}

export default Details