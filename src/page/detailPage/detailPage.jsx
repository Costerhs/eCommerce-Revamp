import { useParams } from 'react-router-dom'
import DetailPageContact from './detailPageContact/detailPageContact'
import DetailPagePost from './detailPagePost/detailPagePost'
import './style.scss'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPostByIdAndSimilarPosts, getUser } from '../../store/reducers/ActionCreator'
import axios from 'axios'
import { productApi } from '../../assets/api/api'
import ProductsList from '../../component/productsList/ProductsList'

const data = {
    "title": "comput2222er2",
    "price": 4332,
    "image": "wallpapersden.com_human-in-space-digital-art_2560x1440.jpg",
    "userId": "65aad3291c2c106efca6a75b",
    "category": 3,
    "status": false,
    "description":"В небольшом городке, затерянном среди холмов и лесов, жила девочка по имени Алиса. Она была особенной - необыкновенно любознательной и вечно жаждущей новых приключений. Каждый день после школы, когда другие дети играли во дворе, Алиса исследовала окрестности, находя загадочные тропинки и заброшенные домики."
}

const DetailPage = () => {
    const postId = useParams().id;
    const postData = useSelector(el => el.productReducer.detailPost);
    const similarPosts = useSelector(el => el.productReducer.similarPosts);
    const category = useSelector(el => el.productReducer.category);
    const load = useSelector(el => el.productReducer.load);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostByIdAndSimilarPosts(postId))
    },[postId])
    

    return (
        <div className='detailPage'>
            <div className="container">
                <div className="detailPage__about">
                    {postData && postData.post && <DetailPagePost category={category} data={postData.post}/> }
                    {postData && postData.userData && <DetailPageContact data={postData.userData}/> }
                </div>
                {similarPosts.length > 0 && <ProductsList title={'Похожие товары'} load={load} products={similarPosts} />} 
            </div>
        </div>
    )
}

export default DetailPage