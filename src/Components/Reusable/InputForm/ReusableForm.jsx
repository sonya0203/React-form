import React from 'react'

function ReusableForm(props) {
    console.log(props.Record)
    return (
        <>
            <form onSubmit={props.HandleSubmit}>

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

                <button>submit</button>
            </form>
            <div>
                {props.show && (<div>
            {props.Record.map((value,id)=>(
                <div key={id}>
                   <div>firstName :{value.firstName}</div>
                    <div> lastName :{value.lastName}</div>
                    <div> username :{value.userName}</div>
                    <div> password :{value.password}</div>
                    <div> confirmPassword :{value.confirmPassword}</div>
                    <div> email :{value.email}</div>
                    <div> phone :{value.phoneNo}</div>
                    <div> pinCode :{value.pinCode}</div>
                    <div> address :{value.address}</div>
                </div>
            ))}
            </div>)}
</div>
        </>
    )
}

export default ReusableForm