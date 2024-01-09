import './style.scss'
import '../../assets/img/inst.png'
import vk from '../../assets/img/vk.png'
import facebook from '../../assets/img/facebook.png'
import inst from '../../assets/img/inst.png'
const Footer = () => {
    return (
        <div className='foot'>
            <h2>BueSell.kg</h2>
            <div className="foot__info">
                <div className="foot__text">Присоединяйтесь к нам</div>
                <a className="foot__icon" href='insthttp://instagram.com/'>
                    <img src={inst} alt="" />
                </a>
                <a className="foot__icon" href='#'>
                    <img src={facebook} alt="face" />
                </a>
                <a className="foot__icon" href='#'>
                    <img src={vk} alt="vk" />
                </a>
            </div>
        </div>
    )
}

export default Footer