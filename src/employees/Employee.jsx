import "./Employee.css"

export const Employee = ({ employee }) => {
    console.log(employee)
    return (
    <div className='employee'>
        <div>
            <h3 className='employee-info'>Name</h3>
            <div>{employee.fullName}</div>
        </div>
        <div>
            <h3 className='employee-info'>Email</h3>
            <div>{employee.email}</div>
        </div>
    </div>
    )
}