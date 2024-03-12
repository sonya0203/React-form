import React from 'react'

function Form(props) {
    return (
        <>
            <form >

                <div><label htmlFor='firstName'>FirstName</label>
                    <input type='text' name='firstName' autoComplete="off" value={props.Value.firstName}
                        onChange={props.HandleInput}></input>
                </div>
                <p style={{ color: 'red' }}>{props.Errors.firstName}</p>

                <div><label htmlFor='lastName'>LastName</label>
                    <input type='text' name='lastName'
                        autoComplete="off" value={props.Value.lastName} onChange={props.HandleInput}></input></div>
                <p style={{ color: 'red' }}>{props.Errors.lastName}</p>


                <div><label htmlFor='userName'>UserName</label>
                    <input type='text' name='userName'
                        autoComplete="off" value={props.Value.userName} onChange={props.HandleInput}></input></div>
                <p style={{ color: 'red' }}>{props.Errors.userName}</p>

                <div><label htmlFor='password'>Password</label>
                    <input type='text' name='password'
                        autoComplete="off" value={props.Value.password} onChange={props.HandleInput}></input></div>
                <p style={{ color: 'red' }}>{props.Errors.password}</p>

                <div><label htmlFor='confirmPassword'>Confirm Password</label>
                    <input type='text' name='confirmPassword'
                        autoComplete="off" value={props.Value.confirmPassword} onChange={props.HandleInput}></input></div>
                <p style={{ color: 'red' }}>{props.Errors.confirmPassword}</p>

                <div><label htmlFor='email'>Email</label>
                    <input type='text' name='email'
                        autoComplete="off" value={props.Value.email} onChange={props.HandleInput}></input></div>

                <div><label htmlFor='phoneNo'>PhoneNo</label>
                    <input type='text' name='phoneNo'
                        autoComplete="off" value={props.Value.phoneNo} onChange={props.HandleInput}></input></div>

                <div><label htmlFor='pinCode'>pinCode</label>
                    <input type='text' name='pinCode'
                        autoComplete="off" value={props.Value.pinCode} onChange={props.HandleInput}></input></div>

                <div><label htmlFor='address'>Address</label>
                    <input type='text' name='address'
                        autoComplete="off" value={props.Value.address} onChange={props.HandleInput}></input></div>

                <button onClick={props.HandleSubmit}>submit</button>
            </form>
          
        </>
    )
}

export default Form