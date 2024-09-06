export const FilterBar = ({ setShowEmergencyOnly, setSearchString }) => {
    return (
    <div className='filter-bar'>
        <button className='filter-button button-primary' onClick={() => setShowEmergencyOnly(true)}>Emergency</button>
        <button className='filter-button button-info' onClick={() => setShowEmergencyOnly(false)}>Show All</button>
        <input type='text' className='ticket-search' placeholder="Search tickets" onChange={(e) => setSearchString(e.target.value)}/>
      </div>
    )
}