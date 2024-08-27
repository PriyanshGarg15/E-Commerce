import { useState } from "react"
import { Link } from "react-router-dom"
const Signup = () => {
    const [passwordType,setPasswordType] =useState("password")
    return(
        <div className="grid md:grid-cols-2 md:h-screen md:overflow-hidden animate__animated animate__fadeIn">
            <img src="/images/signup.jpg" className="w-full md:h-full h-24 object-cover" alt="" />
            <div className="flex flex-col md:p-16 p-8">
                <h1 className="text-4xl font-bold">New User</h1>
                <p className="text-lg text-gray-600">Create your account to start shopping</p>
                <form action="" className="mt-8 space-y-6">
                    <div className="flex flex-col">
                        <label className="font-semibold text-lg mb-1" htmlFor="">Full Name</label>
                        <input required type="text" name="fullname"
                        placeholder="Priyansh Garg"
                        className="p-3 border border-gray-300 rounded" />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-semibold text-lg mb-1" htmlFor="">Email</label>
                        <input required type="email" name="email"
                        placeholder="PriyanshGarg@gmail.com"
                        className="p-3 border border-gray-300 rounded" />
                    </div>
                    <div className="flex flex-col relative">
                        <label className="font-semibold text-lg mb-1" htmlFor="">Password</label>
                        <input required type={passwordType} name="password"
                        placeholder="******"
                        className="p-3 border border-gray-300 rounded" />
                        <button  onClick={()=>setPasswordType(passwordType==="password"?"text":"password")} type="button" className="absolute top-11 right-4 w-8 h-8 rounded-full  hover:bg-blue-300 hover:text-blue-600">
                            {
                                passwordType==="password"?
                                <i className="ri-eye-line"></i>:
                                <i className="ri-eye-off-line"></i>
                            }
                        </button>
                    </div>

                    <button className="py-3 px-8 rounded p-3 bg-blue-600 text-white font-semibold hover:bg-rose-600">SignUp</button>
                </form>
                <div>
                    Already have an account? <Link to="/login" className="font-semibold text-blue-600">Signin</Link> 
                </div>
            </div>
            
        </div>
    )
}

export default Signup