import Layout from "./Layout"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation ,Pagination } from 'swiper/modules';
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Home = () =>{
    return(
        <Layout>
             <div>
                <header>
                <Swiper
                    pagination={true}
                    Navigation={true} modules={[Navigation,Pagination]} slidesPerView={1} 
                    >
                    <SwiperSlide><img src="/images/p1.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="/images/p2.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="/images/p3.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="/images/p4.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="/images/p5.jpg" alt="" /></SwiperSlide>
                </Swiper>
                </header>
                <div className="p-16">
                    <h1 className="text-4xl font-bold text-center">
                        Latest Products</h1>
                    <p className="mx-auto text-center 
                    text-gray-600 w-7/12 mb-6">
                        Discover exceptional quality and innovation in every item. Crafted with precision, each product embodies excellence and reliability, ensuring satisfaction in every use. Whether you're seeking top-tier performance or elegant design, our collection meets all your needs, offering the perfect blend of style and functionality. Explore now and elevate your experience with products designed to exceed expectations.</p>
                    <div className="w-10/12 mx-auto"></div>
                </div>
            </div>
        </Layout>
       
    )
}

export default Home