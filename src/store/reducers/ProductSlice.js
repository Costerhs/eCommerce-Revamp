import { createSlice } from "@reduxjs/toolkit"
import Swal from "sweetalert2"
import { removeLokPropertyWithId } from "../../assets/defFunction/defFunction"
import { addFavorite, getCategory, getProductsOfCategories, getProducts, getFavoritsThunk, getBasket, addBasket, deleteBasket, deletePack } from "./ActionCreator"

const initialState = {
    load: false,
    loadBasket: false,
    products: [],
    category: [],
    productsOfCategory: [],
    favoritesProduct: [],
    basketProducts: {},
    sum: 0
}

export const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        delFavorite(state, action) {
            state[action.payload.arr] = state[action.payload.arr].filter(el => el.id != action.payload.id)
        }
    },
    extraReducers: {
        [getProducts.fulfilled.type]: (state, action) => {
            state.load = false,
            state.products = action.payload
        },
        [getProducts.pending.type]: (state, action) => {
            state.load = true
        },
        [getCategory.fulfilled.type]: (state, action) => {
            state.category = action.payload
        },
        [getProductsOfCategories.fulfilled.type]: (state, action) => {
            state.productsOfCategory = action.payload
        },
        [getFavoritsThunk.fulfilled.type]: (state, action) => {
            state.favoritesProduct = action.payload
            state.load = false
        },
        [getFavoritsThunk.pending.type]: (state, action) => {
            state.load = true
        },
        [getBasket.fulfilled.type]: (state, action) => {
            state.basketProducts = action.payload.data
            state.sum = action.payload.total
            state.loadBasket = false
        },
        [getBasket.pending.type]: (state, action) => {
            state.loadBasket = true
        },
        [addBasket.fulfilled.type]: (state, action) => {
        },
        [addBasket.pending.type]: (state, action) => {
            state.loadBasket = true
        },
        [deleteBasket.fulfilled.type]: (state, action) => {
            // return Swal
        },
        [deleteBasket.pending.type]: (state, action) => {
            state.loadBasket = true
        },
        [deleteBasket.rejected.type]: (state, action) => {
            state.loadBasket = false
        },
        [deletePack.pending.type]: (state, action) => {
            state.loadBasket = true
        },
        [deletePack.rejected.type]: (state, action) => {
            state.loadBasket = false
        },
        [addFavorite.fulfilled.type]: (state, action) => {
            state.products.map(el => {
                if (el.id === action.payload.id) {
                    el.isFavorite = action.payload.isFavorite
                }
            })
        }
    }
}
)
export const { delFavorite } = ProductsSlice.actions;

export default ProductsSlice.reducer