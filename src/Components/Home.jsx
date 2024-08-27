import { useState } from "react";
import Layout from "./Layout"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation ,Pagination } from 'swiper/modules';
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Home = () =>{
    const [products,setProducts]=useState([
        {
            title:'New blue shirts mens',
            price: 1200,
            discount:15,
            thumbnail:'/products/a.jpg'
        },
        {
            title:'New blue shirts mens',
            price: 1200,
            discount:15,
            thumbnail:'/products/b.jpg'
        },
        {
            title:'New blue shirts mens',
            price: 1200,
            discount:15,
            thumbnail:'/products/c.jpg'
        },
        {
            title:'New blue shirts mens',
            price: 1200,
            discount:15,
            thumbnail:'/products/d.jpg'
        },
        {
            title:'New blue shirts mens',
            price: 1200,
            discount:15,
            thumbnail:'/products/e.jpg'
        },
        {
            title:'New blue shirts mens',
            price: 1200,
            discount:15,
            thumbnail:'/products/f.jpg'
        },
        {
            title:'New blue shirts mens',
            price: 1200,
            discount:15,
            thumbnail:'/products/g.jpg'
        },
        {
            title:'New blue shirts mens',
            price: 1200,
            discount:15,
            thumbnail:'/products/i.jpg'
        },
        {
            title:'New blue shirts mens',
            price: 1200,
            discount:15,
            thumbnail:'/products/j.jpg'
        },
        {
            title:'New blue shirts mens',
            price: 1200,
            discount:15,
            thumbnail:'/products/k.jpg'
        },
        {
            title:'New blue shirts mens',
            price: 1200,
            discount:15,
            thumbnail:'/products/l.jpg'
        },{
            title:'New blue shirts mens',
            price: 1200,
            discount:15,
            thumbnail:'/products/l.jpg'
        }

    ]);
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
                    text-gray-600 w-7/12 mb-16">
                        Discover exceptional quality and innovation in every item. Crafted with precision, each product embodies excellence and reliability, ensuring satisfaction in every use. Whether you're seeking top-tier performance or elegant design, our collection meets all your needs, offering the perfect blend of style and functionality. Explore now and elevate your experience with products designed to exceed expectations.</p>
                    <div className="w-10/12 mx-auto grid grid-cols-4 gap-12">
                        {
                            products.map((item,index)=>(
                                <div key={index} className="bg-white shadow-lg">
                                    <img src={item.thumbnail} alt="" />
                                    <div className="p-4">
                                        <h1 className="text-lg font-semibold">{item.title}</h1>
                                        <div className="space-x-2">
                                            <label className="font-bold text-lg" htmlFor="">₹{item.price-(item.price*item.discount)/100}</label>
                                            <del>₹{item.price}</del>
                                            <label className="text-gray-600" htmlFor="">({item.discount}%)</label>
                                        </div>
                                        <button className="bg-green-500 py-2 w-full rounded text-white font-semibold mt-4">Buy Now</button>
                                    </div>
                                </div>
                            ))
                        }
                    
                    </div>
                </div>
            </div>
        </Layout>
       
    )
}

export default Home