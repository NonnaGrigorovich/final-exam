import { Button, Grid, Typography } from '@mui/material'
import { Container } from '@mui/material'
import '../components/ProductList.scss'

import ProductList from '../components/ProductList'

import { currencyList } from '../container/utils/currency'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { changeIdx } from '../redux/shopPageReducer'

type Props = {}

const Main = (props: Props) => {
    const dispatch = useAppDispatch()

    const productsArray = useAppSelector((state) => state.products.products)

    const total = useAppSelector((state) => state.products.total)

    return (
        <>
            <Typography
                variant="h3"
                component="h1"
                sx={{
                    marginBottom: '30px',
                    textAlign: 'center',
                    fontSize: 80,
                }}
            >
                Our shop page
            </Typography>

            <Container className="btn-container">
                {currencyList.map(({ id, currency }) => (
                    <Button
                        className="btn-currency"
                        key={id}
                        onClick={() => dispatch(changeIdx({ id }))}
                    >
                        {currency}
                    </Button>
                ))}
            </Container>

            <Grid container spacing={3} className="container-grid">
                {productsArray.map(
                    ({ id, title, description, price, currency }) => {
                        return (
                            <Grid
                                item
                                xs={12}
                                sm={2}
                                key={id}
                                sx={{ textAlign: 'center' }}
                            >
                                <ProductList
                                    key={id}
                                    id={id}
                                    title={title}
                                    description={description}
                                    currency={currency}
                                    price={price}
                                />
                            </Grid>
                        )
                    }
                )}
            </Grid>

            <Typography
                className="total"
                sx={{
                    fontSize: 'x-large',
                    marginTop: '20px',
                }}
            >
                Total:{total}
            </Typography>
        </>
    )
}

export default Main
