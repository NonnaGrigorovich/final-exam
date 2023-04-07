export type Currency = {
    id: number
    currency: string
    rate: number
  }
  

export const currencyList: Currency[] = [{
    id: 0,
    currency: 'USD',
    rate: 1,
},
{
    id: 1,
    currency: 'EUR',
    rate: 0.9146,
},
{
    id: 2,
    currency: 'UAH',
    rate: 36.88,
},
{
    id: 3,
    currency: 'JPY',
    rate: 131.62,
},
]
  