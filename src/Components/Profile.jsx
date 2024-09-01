import Layout from "./Layout"
const Profile = () =>
{
    return(
        <Layout>
             <div className="mx-auto md:my-16 shadow-lg rounded-md p-8 md:w-7/12 border">
                <div className="flex gap-3">
                    <i className="ri-user-line text-4xl"></i>
                    <h1 className="text-3xl font-semibold">Profile</h1>
                    
                </div>
                <hr className="my-6" />
                <div className=" w-24 mx-auto relative mb-6">
                    <img src="/images/avtar.png" alt=""  className="rounded-full w-24 h-24  "/>
                    <input type="file" accept="image/*" className="opacity-0 absolute top-0 left-0  w-full h-full"/>
                </div>
                <form action="" className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-lg font-semibold">Fullname</label>
                        <input required type="text" name="fullanme" className="p-2 rounded border border-gray-300"
                        value="Priyansh Garg"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-lg font-semibold">Email</label>
                        <input required type="email" name="email" className="p-2 rounded border border-gray-300"
                        value="priyanshgarg123@gmail.com"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-lg font-semibold">Mobile</label>
                        <input required type="number" name="mobile" className="p-2 rounded border border-gray-300"
                        value="2837263747"/>
                    </div>
                    <div/>
                    <div className="flex flex-col gap-2 col-span-2">
                        <label htmlFor="" className="text-lg font-semibold">Area/Street/Village</label>
                        <input required type="text" name="address" className="p-2 rounded border border-gray-300"
                        value="5/66 chandi wali bagichi"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-lg font-semibold">State</label>
                        <input required type="text" name="state" className="p-2 rounded border border-gray-300"
                        value="Agra"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-lg font-semibold">Country</label>
                        <input required type="text" name="country" className="p-2 rounded border border-gray-300"
                        value="India"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-lg font-semibold">Pincode</label>
                        <input required type="number" name="pincode" className="p-2 rounded border border-gray-300"
                        value="282002"/>
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