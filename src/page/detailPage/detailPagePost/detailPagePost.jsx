import { createAction } from '@reduxjs/toolkit';
import './style.scss'

const DetailPagePost = ({data, category}) => {
    console.log(category);
    return (
        <div className="detailPage__post">
            <div className="detailPage__img">
                <img src={'http://localhost:3000/uploads/'+data.images[0]} alt="" />
            </div>
            <div className="detailPage__description">
                <h2 className="detailPage__title">{data.title}</h2>
                <p className="detailPage__price">{data.price} сом</p>
                {category.length > 0 && <p className="detailPage__category">Категория <span>{category.find(item => item.key == data.category).name}</span></p>}
                
                <div className="detailPage__text">
                    <h3>Описание</h3>
                    <p>В небольшом городке, затерянном среди холмов и лесов, жила девочка по имени Алиса. Она была особенной - необыкновенно любознательной и вечно жаждущей новых приключений. Каждый день после школы, когда другие дети играли во дворе, Алиса исследовала окрестности, находя загадочные тропинки и заброшенные домики.</p>
                </div>
            </div>
        </div>
    )
}

export default DetailPagePost;