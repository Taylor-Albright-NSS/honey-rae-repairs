import { getNonStaffUsers } from "../../services/userService"
import { useEffect, useState } from "react"
import { User } from "../../users/User"
import { Link } from "react-router-dom"
import "./Customers.css"
export const CustomersList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getNonStaffUsers().then(customerArray => {
            setCustomers(customerArray)
        })
    }, [])

    return (
        <div className='customers'>
            {customers.map(customer => {
                return <Link to={`/customers/${customer.id}`}><User user={customer} key={customer.id}/></Link>
            })}
        </div>
    )
}

