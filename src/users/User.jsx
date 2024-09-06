import "./User.css"

export const User = ({ user }) => {
    console.log(user)
    return (
    <div className='user'>
        <div>
            <h3 className='user-info'>Name</h3>
            <div>{user.fullName}</div>
        </div>
        <div>
            <h3 className='user-info'>Email</h3>
            <div>{user.email}</div>
        </div>
    </div>
    )
}