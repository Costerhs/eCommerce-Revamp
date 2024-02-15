import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { productApi, userApi } from "../../assets/api/api";

/*const token = localStorage.getItem('token')

export const getProducts = createAsyncThunk('products',
    async () => {
        const res = await productApi.getAllProduct()
        let product;
        if (token) {
            const favArray = await productApi.getFavorites()
            product = res.data
            product.map(el => {
                for (let elem of favArray.data) {
                    if (el.id == elem.product) {
                        el['deleteId'] = elem.id;
                    }
                }
            });
            return product
        } else {
            return res.data
        }
    }
)
*/
const token = localStorage.getItem('token');

export const getProducts = createAsyncThunk('products', async () => {
    const res = await productApi.getAllProduct();
    const product = res.data.posts;
    
    if (token) {
        const favArray = await productApi.getFavorites().then(el => el.data);
        
        product.forEach(el => {
            const favProduct = favArray.find(elem => elem === el._id);
            if (favProduct) {
                el.isFavorite = true;
            }
        });
    }

    return product;
});

export const getPartOfProducts = createAsyncThunk('partOfProducts', async (data) => {
    const product = await productApi.getPartOfProducts(data);
    
    if (token) {
        const favArray = await productApi.getFavorites().then(el => el.data);
        
        product.forEach(el => {
            const favProduct = favArray.find(elem => elem === el._id);
            if (favProduct) {
                el.isFavorite = true;
            }
        });
    }

    return product;
});

export const addFavorite = createAsyncThunk('favorite',
    async (id) => { 
        await productApi.postFavorite(id)
        return id
    }
)

export const deleteFavorite = createAsyncThunk('favoriteDel',
    async (id) => {
        await productApi.delFavorite(id)
        return id
    }
)

export const getCategory = createAsyncThunk('category',
    async () => {
        const res = await productApi.getCategory()
        
        return res.data.categories
    }
)

// export const getProductsOfCategories = createAsyncThunk('productOfcategory',
//     async (id) => {
//         const res = await productApi.getProductsOfCategory(id)
//         return res.data
//     }
// )

export const getFavoritsThunk = createAsyncThunk('getFavorites',
    async () => { 
        const res = await productApi.getAllProduct()
        const favArray = await productApi.getFavorites().then(el => el.data)
        let product = res.data.posts

        product.forEach(el => {
            const favProduct = favArray.includes(el._id);
            if (favProduct) {
                el.isFavorite = true;
            }
        });
        let filteredProduct = product.filter(el => el.isFavorite);
        
        return filteredProduct
    }
)

export const getFavorites = createAsyncThunk('getFavorites',
    async () => {
        const favArray = await productApi.getFavorites();
    }
)

export const getUser = createAsyncThunk('user',
    async (id) => {
        const res = await userApi.getUserById(id)
        const data = res.data
        
        return data
    }
)
export const getUserPost = createAsyncThunk('usersPost',
    async (id) => {
        const res = await productApi.getProductsOfUser(id)
        const data = res.data
        
        return data
    }
)
export const getMyPost = createAsyncThunk('MyPost',
    async () => {
        const res = await productApi.getMyProducts();
        const data = res.data
        
        return data
    }
)

export const deletePack = createAsyncThunk('deletePack', async (arr) => {
    //когда num будет количеству продуктов то будет await чтобы после await сделать запрос на get baskets
    //если же сделать без await то запрос get baskets Будет до того как все удалилось 
    //если всем дать await то будет долгий запрос, сначала 1й удалится потом запрос на 2й  и тд. А в этом случае делается все запросы без await кроме последнего
    let num = 0;
    for (let elem of arr) {
        if (num + 1 === arr.length) await productApi.deleteBasket(elem)
        else {
            num++
            productApi.deleteBasket(elem)
        }
    }
    return
})

export const getPostByIdAndSimilarPosts = createAsyncThunk('onePostAndSimilar', 
    async (id) => {
        const data = await productApi.getPostById(id)
        return data
        
})

export const toggleStatusOfProduct = createAsyncThunk('toggleStatusOfProduct', 
    async ({status,productId}) => {
        let data = await productApi.toggleStatus(!status,productId)
        .then(() => productId)
        return data
})  
