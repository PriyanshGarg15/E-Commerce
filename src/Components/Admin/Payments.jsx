import { useState } from 'react'
import AdminLayout from './Layout'
const Payments = () =>
{
    const[payment,setPayment]=useState([

        {
            customerNAme:'priyansh garg',
            email:'priyansh@gmail.com',
            mobile:'+91 8193989950',
            amount:5000,
            date:'12-10-2024 10:16:13 pm',
        }, {
            customerNAme:'priyansh garg',
            email:'priyansh@gmail.com',
            mobile:'+91 8193989950',
            amount:5000,
            date:'12-10-2024 10:16:13 pm',
        }, {
            customerNAme:'priyansh garg',
            email:'priyansh@gmail.com',
            mobile:'+91 8193989950',
            amount:5000,
            date:'12-10-2024 10:16:13 pm',
        }, {
            customerNAme:'priyansh garg',
            email:'priyansh@gmail.com',
            mobile:'+91 8193989950',
            amount:5000,
            date:'12-10-2024 10:16:13 pm',
        }, {
            customerNAme:'priyansh garg',
            email:'priyansh@gmail.com',
            mobile:'+91 8193989950',
            amount:5000,
            date:'12-10-2024 10:16:13 pm',
        }, {
            customerNAme:'priyansh garg',
            email:'priyansh@gmail.com',
            mobile:'+91 8193989950',
            amount:5000,
            date:'12-10-2024 10:16:13 pm',
        }, {
            customerNAme:'priyansh garg',
            email:'priyansh@gmail.com',
            mobile:'+91 8193989950',
            amount:5000,
            date:'12-10-2024 10:16:13 pm',
        }, {
            customerNAme:'priyansh garg',
            email:'priyansh@gmail.com',
            mobile:'+91 8193989950',
            amount:5000,
            date:'12-10-2024 10:16:13 pm',
        }, {
            customerNAme:'priyansh garg',
            email:'priyansh@gmail.com',
            mobile:'+91 8193989950',
            amount:5000,
            date:'12-10-2024 10:16:13 pm',
        }, {
            customerNAme:'priyansh garg',
            email:'priyansh@gmail.com',
            mobile:'+91 8193989950',
            amount:5000,
            date:'12-10-2024 10:16:13 pm',
        }, {
            customerNAme:'priyansh garg',
            email:'priyansh@gmail.com',
            mobile:'+91 8193989950',
            amount:5000,
            date:'12-10-2024 10:16:13 pm',
        }, {
            customerNAme:'priyansh garg',
            email:'priyansh@gmail.com',
            mobile:'+91 8193989950',
            amount:5000,
            date:'12-10-2024 10:16:13 pm',
        }, {
            customerNAme:'priyansh garg',
            email:'priyansh@gmail.com',
            mobile:'+91 8193989950',
            amount:5000,
            date:'12-10-2024 10:16:13 pm',
        }, {
            customerNAme:'priyansh garg',
            email:'priyansh@gmail.com',
            mobile:'+91 8193989950',
            amount:5000,
            date:'12-10-2024 10:16:13 pm',
        }, {
            customerNAme:'priyansh garg',
            email:'priyansh@gmail.com',
            mobile:'+91 8193989950',
            amount:5000,
            date:'12-10-2024 10:16:13 pm',
        }, {
            customerNAme:'priyansh garg',
            email:'priyansh@gmail.com',
            mobile:'+91 8193989950',
            amount:5000,
            date:'12-10-2024 10:16:13 pm',
        },
    ])
    return (
        <AdminLayout>
            <h1 className='text-xl font-semibold'>Payments</h1>
            <div className='mt-6'>
                <table className='w-full'>
                    <thead>
                        <tr className='bg-rose-600 text-white'>
                            <th className='p-4'>Customer`s Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Amount</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody>
                       {
                            payment.map((item,index)=>(
                                <tr key={index} className='text-center' style={{
                                    background:(index+1)%2===0 ?'#f1f5f9':'white'
                                }}>
                                    <td className='capitalize flex justify-center items-center'>
                                        <div className='flex text-center gap-3 items-center'>
                                            <img src="/images/avtar.png" className="w-10 h-10 rounded-full" alt="" />
                                            <div className='flex flex-col justify-center'>
                                                {item.customerNAme}
                                                <small className='text-gray-500'>{item.date}</small>
                                            </div>
                                           
                                        </div>
                                        
                                    </td>
                                    <td>{item.email}</td>
                                    <td>{item.mobile}</td>
                                    <td>₹{item.amount.toLocaleString()}</td>
                                    <td>{item.date}</td>
                                </tr>
                            ))
                       }
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    )
}


export default Payments
