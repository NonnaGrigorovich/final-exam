import { Button, Card, CardContent, Container } from '@mui/material'
import '../components/ProductList.scss'
import { buyProduct } from '../redux/shopPageReducer'
import { useAppDispatch } from '../redux/hooks'

type Props = {
    id: number
    title: string
    description: string
    currency: string
    price: number
}

const ProductList = ({ id, title, description, price, currency }: Props) => {
    const dispatch = useAppDispatch()
    return (
        <>
            <Card variant="outlined" className="product">
                <CardContent>
                    <h2 className="product-title">{title}</h2>
                    <div className="product-description">{description}</div>
                    <div className="product-price">
                        {currency}: {price}
                    </div>

                    <Container className="btn-container">
                        <Button
                            className="currency-btn"
                            key={id}
                            onClick={() => dispatch(buyProduct({ id }))}
                        >
                            Buy
                        </Button>
                    </Container>
                </CardContent>
            </Card>
        </>
    )
}

export default ProductList
