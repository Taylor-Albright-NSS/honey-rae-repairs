import { getAllEmployees } from "../services/employeeService"
import { getStaffUsers } from "../services/userService"
import { Employee } from "../employees/employee"
import { useEffect, useState } from "react"
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
                return <Employee employee={employee} key={employee.id}/>
            })}
        </div>
    )
}