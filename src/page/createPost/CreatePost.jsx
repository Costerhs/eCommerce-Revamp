import { useForm } from 'react-hook-form'
import './style.scss'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productApi } from '../../assets/api/api'
import { getCategory } from '../../store/reducers/ActionCreator'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
    const dispatch = useDispatch()
    const categoryData = useSelector(el => el.productReducer.category);
    const navigate = useNavigate();

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        mode: 'onClick',
    })
    
    useEffect(() => {
        dispatch(getCategory())
    }, [])

    const onSubmit = async (data) => {
        await productApi.createPost(data)
        navigate('/profile/')
    }

    return (
        <div className='createPost'>
            <div className="container">
                <h2>Разместить объявление просто!</h2>
                <form className="createPost__form" onSubmit={handleSubmit(onSubmit)}>
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
                    <div className="createPost__item createPost__image">
                        <label className="createPost__text">
                            Загрузите фото
                        </label>
                        <input
                            className='createPost__input'
                            type="file"
                            name="image"
                            {...register('image',{
                                required: "*это поле обязательно к заполнению",
                            })}
                        />
                        <p className="createPost__error">{errors?.image ? errors?.image.message : ''}</p>
                    </div>
                    <button type='submit'>Опубликовать</button>
                </form>
            </div>
        </div>
    )
}

export default CreatePost