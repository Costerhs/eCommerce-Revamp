import './style.scss'

const SlideItem = ({ img, title, text }) => {
    return (
        <div className='slideItem' >
            <h2>{title}</h2>
            <p>{text}</p>
            <img src={img} alt="" />
        </div>
    )
}

export default SlideItem