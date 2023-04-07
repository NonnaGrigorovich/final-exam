import { createSlice } from "@reduxjs/toolkit"
import productsArray from "../container/utils/productsArray"
import { currencyList } from "../container/utils/currency"

type Product = {
    id: number
    title: string
    description: string
    price: number
    currency: string
}

const initialState: {
    products: Product[]
    currencyIdx: number
    total: number
    previousRate: number
} = {
    products: productsArray(0),
    currencyIdx: 0,
    total: 0,
    previousRate: 1,
}

export const shopPage = createSlice({
    name: 'productsInShopPage',
    initialState,
    reducers: {

        
        changeIdx: (state, action) => {
            const { id } = action.payload
            const products = productsArray(id)
            const rate = currencyList[id].rate

            state.products = products
            state.currencyIdx = id
            state.total = (state.total / state.previousRate) * rate
            state.previousRate = rate
        },

        buyProduct: (state, action) => {
            if (state.products[action.payload.id]) {
                state.total += state.products[action.payload.id].price;
            }
        },
    },
})
export const { changeIdx, buyProduct } = shopPage.actions

export default shopPage.reducer
