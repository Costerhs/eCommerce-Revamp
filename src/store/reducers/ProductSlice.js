import { createSlice } from "@reduxjs/toolkit"
import Swal from "sweetalert2"
import { removeLokPropertyWithId } from "../../assets/defFunction/defFunction"
import { addFavorite, getCategory, getProducts,getUserPost, getFavoritsThunk,deleteFavorite, deletePack, getPartOfProducts, getPostByIdAndSimilarPosts, getMyPost} from "./ActionCreator"

const initialState = {
    load: false,
    products: [],
    category: [],
    partOfProduct: [],
    favoritesProduct: [],
    sum: 0,
    userProduct:{},
    similarPosts:[],
    detailPost:[],
    myProducts:[]
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

        [getPartOfProducts.fulfilled.type]: (state, action) => {
            state.load = false
            state.partOfProduct = action.payload
        },
        [getPartOfProducts.pending.type]: (state, action) => {
            state.load = true
        },

        [getUserPost.fulfilled.type]: (state, action) => {
            state.load = false
            state.userProduct = action.payload
        },
        [getUserPost.pending.type]: (state, action) => {
            state.load = true
        },

        [getFavoritsThunk.fulfilled.type]: (state, action) => {
            state.partOfProduct = action.payload
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
            state.partOfProduct.map(el => {
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
            state.partOfProduct.map(el => {
                if (el._id === action.payload) {
                    el.isFavorite = true
                }
            })
        },
        [getPostByIdAndSimilarPosts.fulfilled.type]: (state, action) => {
            state.detailPost = action.payload.post
            state.similarPosts = action.payload.similarPosts
            state.load = false
        },
        [getPostByIdAndSimilarPosts.pending.type]: (state, action) => {
            state.load = true
        },
        [getMyPost.fulfilled.type]: (state, action) => {
            state.myProducts = action.payload
            state.load = false
        },
        [getMyPost.pending.type]: (state, action) => {
            state.load = true
        },

    }
}
)
export const { delFavorite } = ProductsSlice.actions;

export default ProductsSlice.reducer