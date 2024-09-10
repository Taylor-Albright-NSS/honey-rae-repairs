import "./App.css"
import { TicketList } from "./components/customers/tickets/TicketList"
import { CustomersList } from "./components/customers/CustomersList"
import { EmployeesList } from "./components/EmployeesList"
import { Routes, Route, Outlet } from "react-router-dom"
import { NavBar } from "./components/nav/NavBar"
import { Welcome } from "./components/welcome/Welcome"
import { CustomerDetails } from "./components/customers/CustomerDetails"
import { EmployeeDetails } from "./employees/EmployeeDetails"

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <NavBar />
          <Outlet />
        </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="tickets" element={<TicketList />} />

        <Route path="employees">
          <Route index element={<EmployeesList />} />
          <Route path=":employeeId" element={<EmployeeDetails />} />
        </Route>

        <Route path="customers">
          <Route index element={<CustomersList />} />
          <Route path=":customerId" element={<CustomerDetails />} />
        </Route>

      </Route>
    </Routes>
  )
}
