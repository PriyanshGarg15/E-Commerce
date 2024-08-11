import { useState } from "react"
import { Link,useLocation} from "react-router-dom"
const Admin = ({children}) =>{
    const[mobilesize,setMobileSize]=useState(0)
    const[size,setSize]=useState(280)
    const[accountMenu,setAccountmenu]=useState(false)
    const menus=[
        {
            label:'Dashboard',
            icon: <i className="ri-dashboard-3-line mr-2"></i>,
            link:'/admin/dashboard'
        },
        {
            label:'Customers',
            icon: <i className="ri-user-line mr-2"></i>,
            link:'/admin/customers'
        },
        {
            label:'Products',
            icon: <i className="ri-shopping-cart-fill mr-2"></i>,
            link:'/admin/products'
        },
        {
            label:'Orders',
            icon: <i className="ri-shape-line mr-2"></i>,
            link:'/admin/orders'
        },
        {
            label:'Payments',
            icon: <i className="ri-money-dollar-circle-line mr-2"></i>,
            link:'/admin/payments'
        },
        {
            label:'Settings',
            icon: <i className="ri-settings-2-line mr-2"></i>,
            link:'/admin/settings'
        }
    ]
    const location=useLocation()
    return(
        <>
            <div className="md:block hidden">
                <aside 
                    className=" bg-indigo-600 fixed top-0 left-0 h-full overflow-hidden"
                    style={{
                        width:size,
                        transition:'0.3s'
                    }}
                >
                    <div className="flex flex-col">
                        {
                                menus.map((item,index)=>(
                                    <Link 
                                        
                                        to={item.link}
                                        className="px-4 py-3 text-gray-50 text-[17.5px] 
                                        hover:bg-rose-600 hover:text-white" 
                                        key={index}
                                        style={{
                                            background:(location.pathname===item.link)?"#E11D48":"transparent"
                                        }}
                                    >
                                        {item.icon}
                                        {item.label}
                                    </Link>
                                ))
                        }
                        <button className="px-4 py-3 text-gray-50 text-[17.5px] 
                                        hover:bg-rose-600 hover:text-white text-left" >
                            <i className="ri-logout-circle-r-line mr-2"></i>
                            Logout
                        </button>

                    </div> 
                </aside>
                <section 
                    className="bg-gray-100 h-screen"
                    style={{
                        marginLeft:size,
                        transition:'0.3s'
                    }}
                >
                    <nav className="bg-white p-6 shadow flex items-center justify-between sticky top-0" >
                        <div className="flex gap-4 items-center">
                            <button 
                                onClick={()=>setSize(size===280?0:280)}
                                className="bg-gray-50 hover:bg-indigo-600 hover:text-white w-8 h-8">
                                <i className="ri-menu-line text-xl"></i>
                            </button>
                            <h1 className="text-md font-semibold">ShopCode</h1>
                        </div>


                        <div>
                            <button className="relative">
                                <img src="/images/avtar.png" className="w-10 h-10 rounded-full" alt="" onClick={()=>setAccountmenu(!accountMenu)}/>
                                {
                                    accountMenu && 
                                    <div className="absolute top-18 right-0 bg-white shadow-lg w-[200px] p-6">
                                        <div>
                                            <h1 className="text-lg font-semibold">Priyansh Garg</h1>
                                            <p className="text-gray-500">priyansh@gmail.com</p>
                                            <div className="h-px bg-gray-200 my-4"></div>
                                            <button>
                                                <i className="ri-logout-circle-r-line mr-2"></i>
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                }
                                
                            </button>
                        </div>
                    </nav>
                    <div className="p-6">
                        {children}
                    </div>
                </section>
            </div>

            <div className="md:hidden block">
            <aside 
                className=" bg-indigo-600 fixed top-0 left-0 h-full overflow-hidden z-50"
                style={{
                    width:mobilesize,
                    transition:'0.3s'
                }}
            >
                <div className="flex flex-col">
                    <button 
                        className="text-left mx-4 mt-4"
                        onClick={()=>setMobileSize(mobilesize===280?0:280)}>
                            <i className="ri-menu-line text-white text-xl"></i>
                    </button>
                {
                        menus.map((item,index)=>(
                            <Link 
                                
                                to={item.link}
                                className="px-4 py-3 text-gray-50 text-[17.5px] 
                                hover:bg-rose-600 hover:text-white" 
                                key={index}
                                style={{
                                    background:(location.pathname===item.link)?"#E11D48":"transparent"
                                }}
                            >
                                {item.icon}
                                {item.label}
                            </Link>
                        ))
                        
                }
                <button className="px-4 py-3 text-gray-50 text-[17.5px] 
                                        hover:bg-rose-600 hover:text-white text-left" >
                            <i className="ri-logout-circle-r-line mr-2"></i>
                            Logout
                        </button>
                </div> 
            </aside>
            <section 
                className="bg-gray-100 h-screen"
            >
                <nav className="bg-white p-6 shadow flex items-center justify-between sticky top-0 " >
                    <div className="flex gap-4 items-center">
                        <button 
                            onClick={()=>setMobileSize(mobilesize===280?0:280)}
                            className="bg-gray-50 hover:bg-indigo-600 hover:text-white w-8 h-8">
                            <i className="ri-menu-line text-xl"></i>
                        </button>
                        <h1 className="text-md font-semibold">ShopCode</h1>
                    </div>


                    <div>
                        <button className="relative">
                            <img src="/images/avtar.png" className="w-10 h-10 rounded-full" alt="" onClick={()=>setAccountmenu(!accountMenu)}/>
                            {
                                accountMenu && 
                                <div className="absolute top-18 right-0 bg-white shadow-lg w-[200px] p-6">
                                    <div>
                                        <h1 className="text-lg font-semibold">Priyansh Garg</h1>
                                        <p className="text-gray-500">priyansh@gmail.com</p>
                                        <div className="h-px bg-gray-200 my-4"></div>
                                        <button>
                                            <i className="ri-logout-circle-r-line mr-2"></i>
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            }
                            
                        </button>
                    </div>
                </nav>
                <div className="p-6">
                    {children}
                </div>
            </section>
            </div>
        </>
    )
}

export default Admin

