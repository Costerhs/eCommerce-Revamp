import { useForm } from 'react-hook-form'
import './style.scss'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productApi } from '../../assets/api/api'
import { getCategory } from '../../store/reducers/ActionCreator'
import { useNavigate } from 'react-router-dom'
import {FaCamera} from 'react-icons/fa'

const CreatePost = () => {
    const dispatch = useDispatch()
    const categoryData = useSelector(el => el.productReducer.category);
    const navigate = useNavigate();
    const [image, setImage] = useState([]);
    const [imageFile,setImageFile] = useState([]);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    
    useEffect(() => {
        dispatch(getCategory())
    }, [])

    const onSubmit = async (data) => {
        data.images = imageFile
        await productApi.createPost(data)
        // navigate('/profile/')
    }

    const handleImageChange = (e) => {
        const file = e.target.files;
        
        if (file && file[0]) {
          const imageUrl = URL.createObjectURL(file[0]);
        //   setImageFile([...imageFile, file])
          setImageFile([...imageFile, file[0]])
          setImage((el) => [...el,imageUrl]);
        }
      };
    return (
        <div className='createPost'>
            <div className="container">
                <h2>Разместить объявление просто!</h2>
                <form className="createPost__form" enctype="multipart/form-data" onChange={handleImageChange} onSubmit={handleSubmit(onSubmit)}>
                <div className="createPost__item createPost__addImage">
                        <div className='createPost__images'>
                            {image.length > 0 &&
                                image.map(el => {
                                    return <div className='createPost__img-block'>
                                    <img src={el} alt="Uploaded" className='createPost__img' />
                                    <span onClick={() => setImage(image.filter(img => img !== el))}>x</span>
                                </div>
                                })
                                }
                        </div>
                        <label className="createPost__text createPost__input-file-text" for='image'>
                            <FaCamera />
                            Загрузить фото
                        </label>
                        <input
                            id='image'
                            className='createPost__input createPost__file'
                            type="file"
                            name="image"
                            // onChange={handleImageChange}
                            // value={image}
                            {...register('images',{
                                required: "*это поле обязательно к заполнению",
                            })}
                        />

                        <p className="createPost__error">{errors?.image ? errors?.image.message : ''}</p>
                    </div>
                <div className="createPost__item createPost__description">
                        <label className="createPost__text">
                            Заголовок
                        </label>
                        <input
                            className='createPost__input'
                            type="textarea"
                            name="title"
                            {...register('title',{
                                required: "*это поле обязательно к заполнению",
                                minLength: {
                                value: 3,
                                message: 'минимум 3 символа'
                                }
                            })}
                        />
                        <p className="createPost__error">{errors?.title ? errors?.title.message : ''}</p>
                    </div>
                    <div className="createPost__item createPost__description">
                        <label className="createPost__text">
                            Описание
                        </label>
                        <textarea
                            rows='3'
                            maxLength={6000}
                            className='createPost__input'
                            type="textarea"
                            name="description"
                            {...register('description',{
                                required: "*это поле обязательно к заполнению",
                                minLength: {
                                value: 3,
                                message: 'минимум 3 символа'
                                }
                            })}
                        />
                        <p className="createPost__error">{errors?.description ? errors?.description.message : ''}</p>
                    </div>
                    <div className="createPost__item createPost__price">
                        <label className="createPost__text">
                            Цена
                        </label>
                        <input
                            className='createPost__input'
                            type="number"
                            name="price"
                            {...register('price',{
                                required: "*это поле обязательно к заполнению",
                                min: {
                                value: 1,
                                message: 'минимум 1 символа'
                                }
                            })}
                        />
                        <p className="createPost__error">{errors?.price ? errors?.price.message : ''}</p>
                    </div>
                    <div className="createPost__item createPost__category">
                        <label className="createPost__text">
                            Категория
                        </label>
                        {categoryData.length && <select {...register('category',{require: "*это поле обязательно к заполнению"})}>
                            {categoryData.map((el) => {
                                return <option key={el.key} value={el.key}>
                                    {el.name}
                                </option>
                            })}
                        </select>}
                    </div>

                   
                    <button type='submit'>Опубликовать</button>
                </form>
            </div>
        </div>
    )
}

export default CreatePost