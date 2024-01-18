import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../../store/reducers/ActionCreator'
import './style.scss'

const Category = ({ setActiveCategory, activeCategory }) => {
    const category = useSelector(el => el.productReducer.category)
    
    return (
        <div className='category'>
            <h2>Категории</h2>
            <div className="category__list">
                {category.length > 0 && category.map((el, ind) => {
                    return (
                        <div
                            key={ind}
                            onClick={() => {
                                setActiveCategory(prevActiveCategory => (prevActiveCategory === el.key ? null : el.key));
                            }}
                            className={`category__item ${activeCategory === el.key ? 'category__item-active' : ''}`}
                        >
                            {el.name}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Category