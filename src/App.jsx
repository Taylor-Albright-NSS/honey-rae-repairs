import { useState } from "react"

export const App = () => {
  let [count, setCount] = useState(0) // [stateVariable, setterFunction]
  const handleButtonClick = () => {
    setCount(count + 1)
  }
  return (
  <>
    <h1>H1 H</h1>
    <div>DIV WORLD</div>
    <button onClick={() => console.log('works!')}></button>
    <div>Count: {count}</div>
  </>
  )
}

export const VenuesList = () => {
  const [venues, setVenues] = useState([])
  
  /*
    Get the venues and set them using setState
    (We'll cover this in a later chapter)
  */

  return (
    <ul>
      {venues.map(venue => {
        return (
          <li className="venue" key={venue.id}>
            {venue.name}
          </li>
        )
      })}
    </ul>
  )
}