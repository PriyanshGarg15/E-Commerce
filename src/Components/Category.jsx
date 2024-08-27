import { useState } from "react"
import Layout from "./Layout"
const Category = () => {
    const [category,setCategory] = useState([
        {
            title:'Electronics'
        },
        {
            title:'Mens'
        },
        {
            title:'Womens'
        },
        {
            title:'Fashion'
        },
        {
            title:'SmartPhones'
        },
        {
            title:'Furnitures'
        }, {
            title:'Electronics'
        },
        {
            title:'Mens'
        },
        {
            title:'Womens'
        },
        {
            title:'Fashion'
        },
        {
            title:'SmartPhones'
        },
        {
            title:'Furnitures'
        }
    ])
    return (
        <Layout> 
            <div className="md:p-16 p-8">
                <div className="md:w-10/12 mx-auto grid md:grid-cols-4 md:gap-16 gap-8">
                  {
                    category.map((item,index)=>(
                        <div key={index} className="border rounded-lg hover:bg-orange-600 hover:text-white bg-white shadow-lg  p-8 flex flex-col justify-center items-center">
                            <i className="ri-menu-search-line text-6xl"></i>
                            <h1 className="text-2xl font-bold ">{item.title}</h1>
                        </div>
                    ))
                  }
                </div>
            </div>
        </Layout>
    )
}

export default Category