import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.scss';
import { Pagination } from 'swiper/modules';
import slidesImg from '../../assets/localData/slides.js';

const SwiperBlock = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slidesImg.map(el => {
          return <SwiperSlide className='slideItem'>
            <h2>{el.title}</h2>
            <p>{el.text}</p>
            <img src={el.img} alt="" />
          </SwiperSlide>
        })}
        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
      </Swiper>
    </>
  );
}

export default SwiperBlock