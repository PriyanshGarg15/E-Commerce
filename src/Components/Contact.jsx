import Layout from "./Layout"
const Contact = () =>{
    return(
        <Layout>
             <div>
                <header className="md:w-6/12 mx-auto md:my-16 md:shadow-lg bg-white border">
                    <img src="/images/contact-us.jpg" className="w-full" alt="" />
                    <div className="p-8 ">
                        <form action="" className="space-y-6">
                            <div className="flex flex-col">
                                <label className="font-semibold text-lg mb-1" htmlFor="">Your name</label>
                                <input required type="text" name="fullname"
                                placeholder="PriyanshGarg"
                                className="p-3 border border-gray-300 rounded" />
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold text-lg mb-1" htmlFor="">Email id</label>
                                <input required type="email" name="email"
                                placeholder="PriyanshGarg@gmail.com"
                                className="p-3 border border-gray-300 rounded" />
                            </div>

                            <div className="flex flex-col">
                                <label className="font-semibold text-lg mb-1" htmlFor="">Message</label>
                                <textarea required name="messsage"
                                placeholder="Enter Your Message Here"
                                className="p-3 border border-gray-300 rounded rows={4}" />
                                
                            </div>

                            <button className="py-3 px-8 rounded p-3 bg-blue-600 text-white font-semibold hover:bg-rose-600">Get Quote</button>
                        </form>
                    </div>
                </header>
             </div>
        </Layout>
    )
}

export default Contact
