import { useEffect, useState } from "react"
import { getAllTickets } from "../../../services/ticketService"
import { Ticket } from "./Ticket"
import { FilterBar } from "./FilterBar"
import "./Tickets.css"

export const TicketList = () => {
    const [allTickets, setAllTickets] = useState([]) // [stateVariable, setterFunction]
    const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
    const [filteredTickets, setFilteredTickets] = useState([])
    const [searchString, setSearchString] = useState('')


    useEffect(() => {
      getAllTickets().then(ticketsArray => {
        setAllTickets(ticketsArray)
      })
    }, [])

    //Function is what we want to happen, the array is when we want it to happen
    //useEffect will only run on the initial render when the dependency array is empty -> []
    
    useEffect(() => {
      if (showEmergencyOnly) {
        const emergencyTickets = allTickets.filter(ticket => ticket.emergency)
        setFilteredTickets(emergencyTickets)
      } else {
        setFilteredTickets(allTickets)
      }
    }, [showEmergencyOnly, allTickets])

    useEffect(() => {
        const searchTickets = allTickets.filter(ticket => 
          ticket.description.toLowerCase().includes(searchString.toLowerCase()))
        setFilteredTickets(searchTickets)
    }, [searchString, allTickets])

    return (
    <div className='tickets-container'>
      <h2>Tickets</h2>
      <FilterBar setShowEmergencyOnly={setShowEmergencyOnly} setSearchString={setSearchString} />
      <article className='tickets'>
        {filteredTickets.map(ticketObj => {
          return (
            <Ticket ticket={ticketObj} key={ticketObj.id}/>
          )
        })}
      </article>
    </div>
  )
}