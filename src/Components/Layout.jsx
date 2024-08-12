import { useState } from "react"
import { Link } from "react-router-dom"
const Layout = ({children}) =>{
    const menus=[
        {
            label:"Home",
            href:'/'
        },
        {
            label:"Products",
            href:'/products'
        },
        {
            label:"Category",
            href:'/category'
        },
        {
            label:"Contact-Us",
            href:'/contact-us'
        }
    ]
    return (
        <div>
            <nav className="sticky top-0 left-0 shadow-lg bg-white">
                <div className="w-10/12  mx-auto flex items-center justify-between">
                    <img 
                        src="/images/logo.png" 
                        className="w-[100px]" alt="" 
                    />
                    <ul className="flex gap-6 items-center">
                        {
                            menus.map((item,index) =>(
                                <li key={index}>
                                    <Link to={item.href} 
                                    className="block py-8 text-center hover:bg-blue-600 w-[100px] hover:text-white">{item.label}</Link>
                                </li>
                            ))
                        }
                        <Link to="/login" className="block py-8 text-center hover:bg-blue-600 w-[100px] hover:text-white">Login</Link>
                        <Link to="/login" className="bg-blue-600 text-white text-md font-semibold block text-center py-3 hover:bg-rose-600 px-10 hover:text-white">Signup</Link>
                    </ul>
                </div>
            </nav>
            <div>
                {children}
            </div>
            <footer className="bg-orange-600 py-16">
                <div className="w-10/12  mx-auto grid grid-cols-4">
                     
                     <div> 
                        <h1 className="text-white font-semibold text-2xl mb-3">Website Links</h1>
                        <ul className="space-y-2 text-slate-50">
                            {
                                menus.map((item,index)=>(
                                    <li key={index}>
                                        <Link to={item.href} key={index}>{item.label}</Link>
                                    </li>
                                ))
                            }
                            
                            <li> <Link to="/login">Login</Link></li>
                            <li> <Link to="/signup">Signup</Link></li>
                        
                            
                        </ul>
                    </div>
                    <div> 
                        <h1 className="text-white font-semibold text-2xl mb-3">Follow us</h1>
                        <ul className="space-y-2 text-slate-50">
                            
                            
                            <li><Link to="/">Faceebook</Link></li>
                            <li><Link to="/">Twitter</Link></li>
                            <li><Link to="/">Linkedin</Link></li>
                            <li><Link to="/">Instagaram</Link></li>
                            <li><Link to="/">Snapchat</Link></li>
                            <li><Link to="/">Reddit</Link></li>
                            
                            
                        </ul>
                    </div>
                    <div className="pr-8"> 
                        <h1 className="text-white font-semibold text-2xl mb-3">Brand Details</h1>
                        <p className="text-slate-50 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, exercitationem aperiam. Assumenda deleniti sint, pariatur cum suscipit dolorem commodi at, atque labore qui optio rerum, rem omnis esse odit quos!</p>
                        <img 
                            src="/images/logo.png" 
                            className="w-[100px]" alt="" 
                        />
                    </div>
                     <div> 
                        <h1 className="text-white font-semibold text-2xl mb-3">Contact us</h1>
                        <form className="space-y-4" action="">
                            <input required type="text" name="fullname" 
                            className="bg-white w-full rounded p-3 " 
                            placeholder="Your Name"/>
                            <input required type="email" name="email" 
                            className="bg-white w-full rounded p-3 " 
                            placeholder="Enter email id"/>
                            <textarea required name="message" id="" 
                            className="bg-white w-full rounded p-3 " placeholder="message" 
                            rows={3}></textarea>
                            <button className="bg-black text-white py-3 px-6 rounded">Submit</button>
                        </form>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout