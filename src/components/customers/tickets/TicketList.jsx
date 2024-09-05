import { useState, useEffect } from "react"
import { getEmployees } from "../../../services/employeeService"

export const TicketList = () => {
  const [state, setState] = useState([])

  useEffect(() => {
    getEmployees().then(employees => {
      setState(employees)
    })
  }, [])

  return (
    <section>
      {state.map(employee => {
        console.log(employee)
        return <div>{employee.user.fullName}</div>
      })}
    </section>
  )
}