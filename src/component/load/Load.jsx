import './style.scss'

const Load = ({ isLoad }) => {
    return (<>
        {isLoad ? <div className='load'>
            <p className='load__text'>...waiting a response the server</p>
        </div> : null}
    </>)
}

export default Load