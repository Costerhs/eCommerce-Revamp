import MyLoader from './LoaderOfCard'
import './style.scss'

const LoaderList = () => {
    return (
        <div className='loader'>
            <MyLoader />
            <MyLoader />
            <MyLoader />
            <MyLoader />
            <MyLoader />
            <MyLoader />
        </div>
    )
}

export default LoaderList