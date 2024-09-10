import { getAllEmployees } from "../services/employeeService"
import { getStaffUsers } from "../services/userService"
import { Employee } from "../employees/employee"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './Employees.css'

export const EmployeesList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getStaffUsers().then(employeeArray => {
            setEmployees(employeeArray)
        })
    }, [])

    return (
        <div className='employees'>
            {employees.map(employee => {
                return <Link to={`/employees/${employee.id}`}><Employee employee={employee} key={employee.id}/></Link>

            })}
        </div>
    )
}