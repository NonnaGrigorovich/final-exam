import { currencyList } from "./currency"

export type Product = {
    id: number
    title: string
    description: string
    price: number
    currency: string
}

export const productsArray = (currencyIndex: number): Product[] => {
    const { currency, rate } = currencyList[currencyIndex]

    return [
        {
            id: 0,
            title: 'iPhone 12',
            description: 'This is iPhone 12',
            currency: `${currency.toString()}`,
            price: 1200 * rate,
       
        },
        {
            id: 1,
            title: 'iPhone 8',
            description: 'This is iPhone 8',
            currency: `${currency.toString()}`,
            price: 500 * rate,
          
        },
        {
            id: 2,
            title: 'iPhone X',
            description: 'This is iPhone X',
            currency: `${currency.toString()}`,
            price: 900 * rate,
            
        }
        
    ]
}


export default productsArray