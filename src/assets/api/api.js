import axios from "axios";
import { default as modal } from 'sweetalert2';
import { changeObjToForm, setLocal } from "../defFunction/defFunction";

const instance = axios.create({
    baseURL: `http://localhost:3000/`
});
let header = { Authorization: `Bearer ${localStorage.getItem("token")}` }





export const userApi = {
    register(data, setIsLoad) {
        if (data.avatar["length"] === 0) delete data.avatar
        else data.avatar = data.avatar[0]

        let newFormData = changeObjToForm(data)
        return instance.post('auth/register', newFormData)
            .then((el) => {
                setIsLoad(false)
                return modal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Успешно зарегистрированы.Теперь вы можете войти',
                    showConfirmButton: true
                })
                
            }).catch((el) => {
                setIsLoad(false)
                let errorMess = Object.values(el.response.data)[0];
                modal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: errorMess
                })
            })
    },
    signIn(data, navigate, setIsLoad) {
        console.log(data);
        
        return instance.post('auth/login', data)
            .catch(() => {
                setIsLoad(false)
                modal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Пароль или имя неправильны попробуйте снова!',
                })
            })
            .then(user => {
                setLocal('token', user.data.token)
                setLocal('userId', user.data._id)
                setLocal('username', user.data.username)
                setIsLoad(false)
                navigate('/')
                window.location.reload()
            })
    },
    getUserById(id) {
        return instance.get(`user/${id}/`)
    }
}


export const productApi = {
    getAllProduct() {
        return instance.get('post',{ headers: header })
    },
    postFavorite(id) {
        const product = { "id": id }

        return instance.patch(`post/favorite`, product, { headers: header })
    },
    getCategory() {
        return instance.get('category')
    },
    getProductsOfCategory(id) {
        return instance.get(`post/category/${id}/`)
    },
    getProductsOfUser(id) {
        return instance.get(`post/user/${id}/`)
    },
    getFavorites() {
        return instance.get('post/favorite', { headers: header })
    },
    getPartOfProducts(data) {
        const { category, searchText } = data;
        const url = `post/part/${category || 0}/${searchText || ''}`;
        return instance.get(url)
        .then(el => el.data);
    },
    delFavorite(id) {
        const product = { "id": id }

        return instance.patch(`post/deleteFavorite`, product, { headers: header })
    },
    getBasket() {
        return instance.get('baskets/', { headers: header })
    },
    addBasket(id) {
        let obj = {
            "products": [
                String(id)
            ],
            "is_active": true
        }
        return instance.post('baskets/', obj, { headers: header })
    },
    deleteBasket(id) {
        return instance.delete(`baskets/${id}/`, { headers: header })
    },
    createPost(data) {
        console.log(data);
        if (data.image["length"] === 0) delete data.image
        else data.image = data.image[0]

        let newFormData = changeObjToForm(data)
        return instance.post('post',newFormData, {headers: header})
        .then(() => {
            return modal.fire({
                position: 'center',
                icon: 'success',
                title: 'Пост успешно создан!',
                showConfirmButton: true
            })
        });
    }
}


instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            modal.fire({
                position: 'center',
                icon: 'error',
                title: 'Произошла ошибка! Пожалуйста попробуйте снова',
                showConfirmButton: true
            }).then((result) => {
                if (result.isConfirmed) {
                    instance.post('token/refresh/', { "refresh": `${localStorage.getItem('refresh')}` })
                        .then((el) => {
                            setLocal('token', el.data.access)
                            window.location.reload()
                        })

                }
            })
        }
        return Promise.reject(error);
    },
);