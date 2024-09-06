import { getNonStaffUsers } from "../../services/userService"
import { useEffect, useState } from "react"
import { User } from "../../users/User"
import "./Customers.css"
export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getNonStaffUsers().then(customerArray => {
            setCustomers(customerArray)
        })
    }, [])

    return (
        <div className='customers'>
            {customers.map(customer => {
                return <User user={customer} key={customer.id}/>
            })}
        </div>
    )
}

