import { createSlice } from '@reduxjs/toolkit'

const productData = [
    { id: 1, title: 'Shoes', price: 100, emoji: '👟' }, 
    { id: 2, title: 'T-shirt', price: 200, emoji: '👕' },
    { id: 3, title: 'Dress', price: 300, emoji: '👗' },
    { id: 4, title: 'Pants', price: 400, emoji: '👖' },
    { id: 5, title: 'Hat', price: 250, emoji: '👒' }
]

export const products = createSlice({
    name: 'products',
    initialState: productData
})