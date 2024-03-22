import { useState } from 'react'
// import styles from '../components/form.modules.css'



function Form() {
    const [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        gender: "",
    })

    const handleUsers = (e) => {
        const name = e.target.name
        const value = e.target.value

        setUserDetails(
            (prevState) => ({
                ...prevState,
                [name]: value
            })
        )

    }

    const handleBtn = (event) => {
        event.preventDefault()
        console.log(email, password);
    }
    return (
        <>
            <div className='myname'>
                <h1>React Sign-Up Form</h1>
                <form onSubmit={handleBtn}>

                    <div className="form-control">
                        <label htmlFor="first">FirstName: </label>
                        <input type="text" name="firstName" value={userDetails.firstName}
                            placeholder="first name"
                            id="first" onChange={handleUsers} />

                        <br /> <br />

                        <label htmlFor="last">LastName: </label>
                        <input type="text" name="lastName" value={userDetails.lastName}
                            placeholder="last name"
                            id="last" onChange={handleUsers} />

                        <br /> <br />


                        <label htmlFor='username'>UserName: </label>
                        <input type="text" name="userName" value={userDetails.userName}
                            placeholder='username'
                            id="username" onChange={handleUsers} />

                        <br /> <br />

                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" value={userDetails.email}
                            placeholder="email@gmail.com"
                            id="email" onChange={handleUsers} />

                        <br /> <br />

                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" value={userDetails.password}
                            placeholder="password"
                            id="password" onChange={handleUsers} />

                        <br /> <br />
                        <label htmlFor='gender'>
                            Gender
                        </label>
                        <select name='gender' id='gender'>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div> <br /> <br />
                    <button>Log In</button>
                </form>
            </div>

            <div>
                <p> 
                    FirstName: {userDetails.firstName} <br /> <br />
                    LastName: {userDetails.lastName} <br /> <br />
                    UserName: {userDetails.userName} <br /> <br />
                    Email: {userDetails.email} <br /> <br />
                    Password: {userDetails.password}
                </p>
            </div>

        </>
    )

}

export default Form