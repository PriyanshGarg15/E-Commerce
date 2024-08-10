import { useState } from 'react'
import AdminLayout from './Layout'
const Orders = () =>
{
    const[orders,setOrders]=useState([
        {
            orderId:'#rtyza' ,
            customerNAme:'priyansh garg',
            email:'priyansh@gmail.com',
            mobile:'+91 8193989950',
            product:'lenovo ideapad 360',
            amount:52000,
            date:'12-10-2024 10:16:13 pm',
            status:'pending'
        },
        {
            orderId:'#rtyza' ,
            customerNAme:'priyansh garg',
            email:'priyansh@gmail.com',
            mobile:'+91 8193989950',
            product:'lenovo ideapad 360',
            amount:52000,
            date:'12-10-2024 10:16:13 pm',
            status:'pending'
        },
        {
            orderId:'#rtyza' ,
            customerNAme:'priyansh garg',
            email:'priyansh@gmail.com',
            mobile:'+91 8193989950',
            product:'lenovo ideapad 360',
            amount:52000,
            date:'12-10-2024 10:16:13 pm',
            status:'pending'
        },
        {
            orderId:'#rtyza' ,
            customerNAme:'priyansh garg',
            email:'priyansh@gmail.com',
            mobile:'+91 8193989950',
            product:'lenovo ideapad 360',
            amount:52000,
            date:'12-10-2024 10:16:13 pm',
            status:'pending'
        },
        {
            orderId:'#rtyza' ,
            customerNAme:'priyansh garg',
            email:'priyansh@gmail.com',
            mobile:'+91 8193989950',
            product:'lenovo ideapad 360',
            amount:52000,
            date:'12-10-2024 10:16:13 pm',
            status:'pending'
        },
        {
            orderId:'#rtyza' ,
            customerNAme:'priyansh garg',
            email:'priyansh@gmail.com',
            mobile:'+91 8193989950',
            product:'lenovo ideapad 360',
            amount:52000,
            date:'12-10-2024 10:16:13 pm',
            status:'pending'
        },
        {
            orderId:'#rtyza' ,
            customerNAme:'priyansh garg',
            email:'priyansh@gmail.com',
            mobile:'+91 8193989950',
            product:'lenovo ideapad 360',
            amount:52000,
            date:'12-10-2024 10:16:13 pm',
            status:'pending'
        },
        {
            orderId:'#rtyza' ,
            customerNAme:'priyansh garg',
            email:'priyansh@gmail.com',
            mobile:'+91 8193989950',
            product:'lenovo ideapad 360',
            amount:52000,
            date:'12-10-2024 10:16:13 pm',
            status:'pending'
        },
        {
            orderId:'#rtyza' ,
            customerNAme:'priyansh garg',
            email:'priyansh@gmail.com',
            mobile:'+91 8193989950',
            product:'lenovo ideapad 360',
            amount:52000,
            date:'12-10-2024 10:16:13 pm',
            status:'pending'
        },
        {
            orderId:'#rtyza' ,
            customerNAme:'priyansh garg',
            email:'priyansh@gmail.com',
            mobile:'+91 8193989950',
            product:'lenovo ideapad 360',
            amount:52000,
            date:'12-10-2024 10:16:13 pm',
            status:'pending'
        },
        {
            orderId:'#rtyza' ,
            customerNAme:'priyansh garg',
            email:'priyansh@gmail.com',
            mobile:'+91 8193989950',
            product:'lenovo ideapad 360',
            amount:52000,
            date:'12-10-2024 10:16:13 pm',
            status:'pending'
        },
        {
            orderId:'#rtyza' ,
            customerNAme:'priyansh garg',
            email:'priyansh@gmail.com',
            mobile:'+91 8193989950',
            product:'lenovo ideapad 360',
            amount:52000,
            date:'12-10-2024 10:16:13 pm',
            status:'pending'
        },
        {
            orderId:'#rtyza' ,
            customerNAme:'priyansh garg',
            email:'priyansh@gmail.com',
            mobile:'+91 8193989950',
            product:'lenovo ideapad 360',
            amount:52000,
            date:'12-10-2024 10:16:13 pm',
            status:'pending'
        },
        {
            orderId:'#rtyza' ,
            customerNAme:'priyansh garg',
            email:'priyansh@gmail.com',
            mobile:'+91 8193989950',
            product:'lenovo ideapad 360',
            amount:52000,
            date:'12-10-2024 10:16:13 pm',
            status:'pending'
        }
    ])
    return (
        <AdminLayout>
            <h1 className='text-xl font-semibold'>Orders</h1>
            <div className='mt-6'>
                <table className='w-full'>
                    <thead>
                        <tr className='bg-rose-600 text-white'>
                            <th className='py-4'>Order Id</th>
                            <th>Customer`s Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Product</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                       {
                            orders.map((item,index)=>(
                                <tr key={index} className='text-center' style={{
                                    background:(index+1)%2===0 ?'#f1f5f9':'white'
                                }}>
                                    <td className='py-4'>{item.orderId}</td>
                                    <td className='capitalize'>{item.customerNAme}</td>
                                    <td>{item.email}</td>
                                    <td>{item.mobile}</td>
                                    <td className='capitalize'>{item.product}</td>
                                    <td>₹{item.amount.toLocaleString()}</td>
                                    <td>{item.date}</td>
                                    <td className='capitalize'>
                                        <select className='border p-1 border-gray-200'>
                                            <option value="Pending">
                                                Pending
                                            </option>
                                            <option value="Processing">
                                                Processing
                                            </option>
                                            <option value="Dispached">
                                               Dispached
                                            </option>
                                            <option value="Returned">
                                               Returned
                                            </option>
                                        </select>
                                    </td>
                                </tr>
                            ))
                       }
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    )
}


export default Orders
