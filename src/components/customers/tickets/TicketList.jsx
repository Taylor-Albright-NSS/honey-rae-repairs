import { useEffect, useState } from "react"
import { getAllTickets } from "../../../services/ticketService"
import { Ticket } from "./Ticket"
import "./Tickets.css"

export const TicketList = () => {
    const [allTickets, setAllTickets] = useState([]) // [stateVariable, setterFunction]
    const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
    const [filteredTickets, setFilteredTickets] = useState([])
    useEffect(() => {
      getAllTickets().then(ticketsArray => {
        setAllTickets(ticketsArray)
        console.log(ticketsArray, ' tickets array')
      })
    }, []) //Function is what we want to happen, the array is when we want it to happen
          //useEffect will only run on the initial render when the array looks like []
    useEffect(() => {
      if (showEmergencyOnly) {
        const emergencyTickets = allTickets.filter(ticket => ticket.emergency)
        setFilteredTickets(emergencyTickets)
      } else {
        setFilteredTickets(allTickets)
      }
    }, [showEmergencyOnly, allTickets])
    return (
    <div className='tickets-container'>
      <h2>Tickets</h2>
      <div>
        <button className='filter-button button-primary' onClick={() => setShowEmergencyOnly(true)}>Emergency</button>
        <button className='filter-button button-info' onClick={() => setShowEmergencyOnly(false)}>Show All</button>
      </div>
      <article className='tickets'>
        {filteredTickets.map(ticketObj => {
          return (
            <Ticket ticket={ticketObj} name='Joe' key={ticketObj.id}/>
          )
        })}
      </article>
    </div>
  )
}