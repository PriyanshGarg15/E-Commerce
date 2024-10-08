import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link} from "react-router-dom"
import { useEffect } from "react"
import { getAuth,onAuthStateChanged, signOut } from "firebase/auth"
import firebaseAppConfig from "../util/firebase-config"
const auth=getAuth()

const Layout = ({children}) =>{

    const[open,setopen]=useState(false)
    const[account,setAccoutnMenu]=useState(false)
    const navigate=useNavigate()

    const [session,setSession] = useState(null)

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user)
            {
                setSession(user)
            }
            else{
                setSession(false)
            }
        })

    },[])

    

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

    const mobileLink= (href)=>{
        navigate(href)
        setopen(false)
    }

    if (session == null)
        return (
            <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 h-full fixed top-0 left-0 w-full flex flex-col items-center justify-center">
                <svg className="animate-spin h-10 w-10 text-rose-600 mb-4" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
                <p className="text-rose-600 text-lg font-semibold">Loading...</p>
            </div>
        )
    
    
    







    return (
        <div>
            <nav className="sticky top-0 left-0 shadow-lg bg-white z-[50]">
                <div className="w-10/12  mx-auto flex items-center justify-between">
                    <img 
                        src="/images/logo.png" 
                        className="w-[100px]" alt="" 
                    />

                    <button className="md:hidden" onClick={()=>setopen(!open)}>
                        <i className="ri-menu-3-fill text-4xl"></i>
                    </button>

                    <ul className="md:flex gap-6 items-center hidden">
                        {
                            menus.map((item,index) =>(
                                <li key={index}>
                                    <Link to={item.href} 
                                    className="block py-8 text-center hover:bg-blue-600 w-[100px] hover:text-white">{item.label}</Link>
                                </li>
                            ))
                        }
                        {
                            !session && 
                            <>
                                <Link to="/login" className="block py-8 text-center hover:bg-blue-600 w-[100px] hover:text-white">Login</Link>
                                <Link to="/signup" className="bg-blue-600 text-white text-md font-semibold block text-center py-3 hover:bg-rose-600 px-10 hover:text-white">Signup</Link>
                            </>
                           
                        }

                        {
                            session &&
                            <button className="relative" onClick={()=>setAccoutnMenu(!account)}>
                                <img src={session.photoURL?session.photoURL:"/images/avtar.png"} alt="" className="w-12 h-10 rounded-full" />
                                {
                                    account &&
                                    <div className="animate__animated animate__fadeIn w-[150px] bg-white absolute top-12 right-0 shadow-xl flex flex-col items-start py-2">
                                        
                                        <Link to="/profile" className="w-full text-left px-3 py-2 hover:bg-gray-100"><i className="ri-user-line mr-2"></i>
                                        My Profile</Link>
                                        
                                        <Link to="/cart" className="w-full text-left px-3 py-2hover:bg-gray-100"><i className="ri-shopping-cart-line mr-2"></i>Cart</Link>

                                        <button 
                                            className="w-full text-left px-3 py-2 hover:bg-gray-100" 
                                            onClick={() => signOut(auth)}
                                        >
                                            <i className="ri-logout-circle-r-line mr-2"></i>
                                            Logout
                                        </button>

                                    </div>
                                }
                                
                            </button>
                            
                        }
                       
                    </ul>
                </div>
            </nav>
            <div>
                {children}
            </div>
            <footer className="bg-orange-600 py-16">
                <div className="w-10/12  mx-auto grid md:grid-cols-4 md:gap-0 gap-8">
                     
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

            <aside className="md:hidden overflow-hidden bg-slate-900  shadow-lg fixed top-0 left-0 h-full z-50"
            style={
                {
                    width:(open?250:0),
                    transition:'0.3s'
                }
            }
            >
                <div className="flex flex-col p-8 gap-6">
                    {
                        session &&
                        <button className="relative" onClick={()=>setAccoutnMenu(!account)}>
                            <div className="flex items-center gap-3">
                                <img src={session.photoURL?session.photoURL:"/images/avtar.png"} alt="" className="w-12 h-10 rounded-full" />
                                <div>
                                    <p className="text-white capitalize
                                    text-left">{session.displayName}</p>
                                    <p className="text-white break-all">{session.email}</p>
                                </div>
                                
                            </div>
                           
                            {
                                account &&
                                <div className="animate__animated animate__fadeIn w-[150px] bg-white absolute top-12 right-0 shadow-xl flex flex-col items-start py-2">
                                    
                                    <Link to="/profile" className="w-full text-left px-3 py-2 hover:bg-gray-100"><i className="ri-user-line mr-2"></i>
                                    My Profile</Link>
                                    
                                    <Link to="/cart" className="w-full text-left px-3 py-2hover:bg-gray-100"><i className="ri-shopping-cart-line mr-2"></i>Cart</Link>

                                    <button 
                                        className="w-full text-left px-3 py-2 hover:bg-gray-100" 
                                        onClick={() => signOut(auth)}
                                    >
                                        <i className="ri-logout-circle-r-line mr-2"></i>
                                        Logout
                                    </button>

                                </div>
                            }
                            
                        </button>
                        
                    }
                    {
                        menus.map((item,index)=>(
                            <button key={index} onClick={() => mobileLink(item.href)} className="text-white">{item.label}</button>
                        ))
                    }
                </div>
            </aside>
            
        </div>
    )
}

export default Layout