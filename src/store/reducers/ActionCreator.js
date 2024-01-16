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
    console.log(token);
    
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
        let res = await productApi.postFavorite(id)
        return { id: id, isFavorite: res.data.success }
    }
)

export const deleteFavorite = createAsyncThunk('favoriteDel',
    async (id) => {
        const res = await productApi.delFavorite(id)
        getProducts()
        return res.data.id
    }
)

export const getCategory = createAsyncThunk('category',
    async () => {
        const res = await productApi.getCategory()
        return res.data
    }
)

export const getProductsOfCategories = createAsyncThunk('productOfcategory',
    async (id) => {
        const res = await productApi.getProductsOfCategory(id)
        return res.data
    }
)

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
        console.log(favArray);
        
    }
)

export const getUser = createAsyncThunk('user',
    async (id) => {
        const res = await userApi.getUserById(id)
        return res.data
    }
)

export const getBasket = createAsyncThunk('getBasket',
    async () => {
        const res = await productApi.getBasket()
        let basketsData = res.data
        let total = 0;
        let cArr = {};
        basketsData.map(el => {
            total += el.total
            if (cArr[el.products_data[0].id]) {
                cArr[el.products_data[0].id].ids.push(el.id)
            } else {
                cArr[el.products_data[0].id] = { ids: [el.id], data: el.products_data, total: el.total }
            }
        })
        return { total: total, data: cArr }
    }
)

export const addBasket = createAsyncThunk('addBasket', async (id) => {
    const res = await productApi.addBasket(id)
    return res.data
})

export const deleteBasket = createAsyncThunk('deleteBasket', async (id) => {
    const res = await productApi.deleteBasket(id)
    return res.data
})

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