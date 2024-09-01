import { useEffect, useState } from "react"
import firebaseAppConfig from "../../util/firebase-config"
import { getAuth } from "firebase/auth"
import { onAuthStateChanged } from "firebase/auth"
import { Navigate } from "react-router-dom"
import { Outlet } from "react-router-dom"
const auth=getAuth(firebaseAppConfig)
const PreGuard=()=>{
    const [session,setSession]=useState(null)
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

    if(session===null)
        return (
            <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 h-full fixed top-0 left-0 w-full flex flex-col items-center justify-center">
                <svg className="animate-spin h-10 w-10 text-rose-600 mb-4" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
                <p className="text-rose-600 text-lg font-semibold">Loading...</p>
            </div>
        )


        if(session)
            return <Navigate to={"/"}/>
        



        return <Outlet/>
}

export default PreGuard