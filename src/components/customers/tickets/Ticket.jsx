import { useState, useEffect } from "react"
import { getAllEmployees } from "../../../services/employeeService"

export const Ticket = (props) => {
    const [employees, setEmployees] = useState([])
    const [assignedEmployee, setAssignedEmployee] = useState({}) 

    useEffect(() => {
        getAllEmployees().then(employeesArray => {
            setEmployees(employeesArray)
        })
    }, [])
    
    useEffect(() => {
        const foundEmployee = employees.find(employee => employee.id === props.ticket.employeeTickets[0]?.employeeId)
        setAssignedEmployee(foundEmployee)
    }, [employees, props.ticket])

    return (
    <section className='ticket' key={props.ticket.id}>
    <header className='ticket-info'>#{props.ticket.id}</header>
    <div>{props.ticket.description}</div>
    <footer>
        <div>
            <div className='ticket-info'>assignee</div>
            <div>{assignedEmployee ? assignedEmployee.user?.fullName : 'None'}</div>
        </div>
      <div>
        <div className='ticket-info'>emergency</div>
        <div>{props.ticket.emergency ? "yes" : "no"}</div>
      </div>
    </footer>
  </section>
    )
}