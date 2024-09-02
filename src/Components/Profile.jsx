import { useEffect, useState } from "react"
import firebaseAppConfig from "firebase/compat/app"
import { onAuthStateChanged, getAuth, updateProfile } from "firebase/auth"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { useNavigate } from "react-router-dom"
import Layout from "./Layout"

const auth = getAuth()
const storage = getStorage()

const Profile = () => {
    const navigate = useNavigate()
    const [session, setSession] = useState(null)
   
    const [formvalue, setFormvalue] = useState({
        fullname: '',
        email: '',
        mobile: '100',
        address: 'from api',
        city: 'from api',
        state: 'from api',
        country: 'from api',
        pincode: '100'
    })

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setSession(user)
            } else {
                setSession(false)
                navigate('/login')
            }
        })
    }, [])

    const handleProfilePicture = async (e) => {
        const input = e.target
        const file = input.files[0]
        const filenamearray = file.name.split(".")
        const ext = filenamearray[filenamearray.length - 1]
        const filename = Date.now() + '.' + ext
        const bucket = ref(storage, `pictures/${filename}`)
        const snapshot = await uploadBytes(bucket, file)
        const url = await getDownloadURL(snapshot.ref)
        await updateProfile({
            photoURL:url
        })
    }

    const handleFormValue = (e) => {
        const input = e.target
        const name = input.name
        const value = input.value
        setFormvalue({
            ...formvalue,
            [name]: value
        })
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
        <Layout>
            <div className="mx-auto md:my-16 shadow-lg rounded-md p-8 md:w-7/12 border">
                <div className="flex gap-3">
                    <i className="ri-user-line text-4xl"></i>
                    <h1 className="text-3xl font-semibold">Profile</h1>
                </div>
                <hr className="my-6" />
                <div className="w-24 mx-auto relative mb-6">
                    <img src={session.photoURL?session.photoURL : "/images/avtar.png"} alt="Profile" className="rounded-full w-24 h-24" />
                    <input type="file" accept="image/*" className="opacity-0 absolute top-0 left-0 w-full h-full z-10" onChange={handleProfilePicture} />
                </div>

                <form action="" className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-lg font-semibold">Fullname</label>
                        <input
                            onChange={handleFormValue}
                            required type="text" name="fullname" className="p-2 rounded border border-gray-300"
                            value={session.displayName || formvalue.fullname} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-lg font-semibold">Email</label>
                        <input
                            onChange={handleFormValue}
                            required type="email" name="email" className="p-2 rounded border border-gray-300"
                            value={session.email || formvalue.email} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-lg font-semibold">Mobile</label>
                        <input
                            onChange={handleFormValue}
                            required type="number" name="mobile" className="p-2 rounded border border-gray-300"
                            value={formvalue.mobile} />
                    </div>
                    <div />
                    <div className="flex flex-col gap-2 col-span-2">
                        <label htmlFor="" className="text-lg font-semibold">Area/Street/Village</label>
                        <input
                            onChange={handleFormValue}
                            required type="text" name="address" className="p-2 rounded border border-gray-300"
                            value={formvalue.address} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-lg font-semibold">City</label>
                        <input
                            onChange={handleFormValue}
                            required type="text" name="city" className="p-2 rounded border border-gray-300"
                            value={formvalue.city} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-lg font-semibold">State</label>
                        <input
                            onChange={handleFormValue}
                            required type="text" name="state" className="p-2 rounded border border-gray-300"
                            value={formvalue.state} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-lg font-semibold">Country</label>
                        <input
                            onChange={handleFormValue}
                            required type="text" name="country" className="p-2 rounded border border-gray-300"
                            value={formvalue.country} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-lg font-semibold">Pincode</label>
                        <input
                            onChange={handleFormValue}
                            required type="number" name="pincode" className="p-2 rounded border border-gray-300"
                            value={formvalue.pincode} />
                    </div>

                    <button className="px-4 py-2 bg-rose-600 text-white rounded w-fit col-span-2 hover:bg-green-500">
                        <i className="ri-save-line mr-2"></i>
                        Save
                    </button>
                </form>
            </div>
        </Layout>
    )
}

export default Profile















// import { useEffect, useState } from "react"
// import firebaseAppConfig from "firebase/compat/app"
// import { onAuthStateChanged,getAuth } from "firebase/auth"
// import { getStorage,ref,uploadBytes } from "firebase/storage"
// import { useNavigate } from "react-router-dom"
// import Layout from "./Layout"

// const auth=getAuth()
// const storage=getStorage()


// const Profile = () =>
// {
//     const navigate=useNavigate()
//     const [session,setSession] = useState(null)
//     const [formvalue,setFormvalue]=useState({
//         fullname:'',
//         email:'',
//         mobile:'100',
//         address:'from api',
//         city:'from api',
//         state:'from api',
//         country:'from api',
//         pincode:'100'
//     })
//     useEffect(()=>{
//         onAuthStateChanged(auth,(user)=>{
//             if(user)
//             {
//                 setSession(user)
//             }
//             else{
//                 setSession(false)
//                 navigate('/login')
//             }
//         })
//     },[])



//     const setProfilePicture=async (e)=>{
//         const input=e.target
//         const file=input.files[0]
//         const filenamearray=file.name.split(".")
//         const ext=filenamearray[filenamearray.length-1]
//         const filename=Date.now()+'.'+ext
//         const bucket=ref(storage,`pictures/${filename}`)
//         const snapshot=await uploadBytes(bucket,file)

//     }

//     const handleFormValue=(e)=>{
//         const input=e.target
//         const name=input.name
//         const value=input.value
//         setFormvalue({
//             ...formvalue,
//             [name]:value
//         })
//     }




//     if (session == null)
//     return (
//         <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 h-full fixed top-0 left-0 w-full flex flex-col items-center justify-center">
//             <svg className="animate-spin h-10 w-10 text-rose-600 mb-4" viewBox="0 0 24 24">
//                 <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
//                 <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
//             </svg>
//             <p className="text-rose-600 text-lg font-semibold">Loading...</p>
//         </div>
//     )
    
//     return(
//         <Layout>
//              <div className="mx-auto md:my-16 shadow-lg rounded-md p-8 md:w-7/12 border">
//                 <div className="flex gap-3">
//                     <i className="ri-user-line text-4xl"></i>
//                     <h1 className="text-3xl font-semibold">Profile</h1>
                    
//                 </div>
//                 <hr className="my-6" />
//                 <div className="w-24 mx-auto relative mb-6">
//                     <img src="/images/avtar.png" alt="" className="rounded-full w-24 h-24" />
//                     <input type="file" accept="image/*" className="opacity-0 absolute top-0 left-0 w-full h-full z-10" onChange={setProfilePicture}/>
//                 </div>

//                 <form action="" className="grid grid-cols-2 gap-6">
//                     <div className="flex flex-col gap-2">
//                         <label htmlFor="" className="text-lg font-semibold">Fullname</label>
//                         <input
//                         onChange={handleFormValue}
//                         required type="text" name="fullanme" className="p-2 rounded border border-gray-300"
//                         value={session.displayName}/>
//                     </div>
//                     <div className="flex flex-col gap-2">
//                         <label htmlFor="" className="text-lg font-semibold">Email</label>
//                         <input 
//                         onChange={handleFormValue}
//                         required type="email" name="email" className="p-2 rounded border border-gray-300"
//                         value={session.email}/>
//                     </div>
//                     <div className="flex flex-col gap-2">
//                         <label htmlFor="" className="text-lg font-semibold">Mobile</label>
//                         <input 
//                         onChange={handleFormValue}
//                         required type="number" name="mobile" className="p-2 rounded border border-gray-300"
//                         value={formvalue.mobile}/>
//                     </div>
//                     <div/>
//                     <div className="flex flex-col gap-2 col-span-2">
//                         <label htmlFor="" className="text-lg font-semibold">Area/Street/Village</label>
//                         <input 
//                         onChange={handleFormValue}
//                         required type="text" name="address" className="p-2 rounded border border-gray-300"
//                         value={formvalue.address}/>
//                     </div>
//                     <div className="flex flex-col gap-2">
//                         <label htmlFor="" className="text-lg font-semibold">State</label>
//                         <input 
//                         onChange={handleFormValue}
//                         required type="text" name="state" className="p-2 rounded border border-gray-300"
//                         value={formvalue.city}/>
//                     </div>
//                     <div className="flex flex-col gap-2">
//                         <label htmlFor="" className="text-lg font-semibold">Country</label>
//                         <input 
//                         onChange={handleFormValue}
//                         required type="text" name="country" className="p-2 rounded border border-gray-300"
//                         value={formvalue.country}/>
//                     </div>
//                     <div className="flex flex-col gap-2">
//                         <label htmlFor="" className="text-lg font-semibold">Pincode</label>
//                         <input 
//                         onChange={handleFormValue}
//                         required type="number" name="pincode" className="p-2 rounded border border-gray-300"
//                         value={formvalue.pincode}/>
//                     </div>
                    
//                     <button className="px-4 py-2 bg-rose-600 text-white rounded w-fit col-span-2 hover:bg-green-500">
//                         <i className="ri-save-line mr-2"></i>
//                         Save
//                     </button>
//                 </form>
//              </div>
//         </Layout>
       
//     )
// }

// export default Profile