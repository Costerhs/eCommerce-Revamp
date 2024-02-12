import './style.scss'
import data from '../../../assets/localData/slides'
import Banner from './slideItem/Banner'
import { useEffect, useState } from 'react'

const Slider = () => {
    const [slide, setSlide] = useState(0)


    const changeSlide = () => {
        if (slide + 1 === data.length) {
            setSlide(0)
            return
        }
        setSlide(slide + 1)
    }

    return (
        <div className='slide'>
            <Banner title={data[slide].title} text={data[slide].text} img={data[slide].img} />
            <div className="slide__pagination">
                {data.map((el, ind) => {
                    return <button key={ind} onClick={() => setSlide(ind)} className={`slide__btn ${slide === ind && 'slide__btn-active'}`}></button>
                })}
            </div>
        </div>
    )
}

export default Slider