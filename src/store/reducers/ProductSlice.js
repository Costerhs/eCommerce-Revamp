import { createSlice } from "@reduxjs/toolkit"
import Swal from "sweetalert2"
import { removeLokPropertyWithId } from "../../assets/defFunction/defFunction"
import { addFavorite, getCategory, getProductsOfCategories, getProducts, getFavoritsThunk,deleteFavorite, deletePack } from "./ActionCreator"

const initialState = {
    load: false,
    loadBasket: false,
    products: [],
    category: [],
    productsOfCategory: [],
    favoritesProduct: [],
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
        [deletePack.pending.type]: (state, action) => {
            state.loadBasket = true
        },
        [deletePack.rejected.type]: (state, action) => {
            state.loadBasket = false
        },
        [deleteFavorite.fulfilled.type]: (state, action) => {
            state.products.map(el => {
                if (el._id === action.payload) {
                    el.isFavorite = false
                }
            })
        },
        [addFavorite.fulfilled.type]: (state, action) => {
            state.products.map(el => {
                if (el._id === action.payload) {
                    el.isFavorite = true
                }
            })
        },
    }
}
)
export const { delFavorite } = ProductsSlice.actions;

export default ProductsSlice.reducer