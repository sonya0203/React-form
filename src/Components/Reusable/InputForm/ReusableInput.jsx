import React, { useEffect, useState } from 'react'
import Form from './Form'
function ReusableInput() {

  const [Value, setValue] = useState(
    {
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      confirmPassword: "",
      email: "",
      phoneNo: "",
      pinCode: "",
      address: ""
    })

  const [Errors, setErrors] = useState([{}])
  const [Record,setRecord]=useState([])
  useEffect(() => {
    const newRecord = { ...Value, id: new Date().getTime().toString() };
    setRecord([...Record,newRecord]);
  }, [Value]);

  const HandleInput = (e) => {   
    const name = e.target.name;
    const value = e.target.value;
    setValue({ ...Value, [name]: value });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validate(Value))
    if (Object.keys(Errors).length === 0) {
      setValue(
        {
          firstName: "",
          lastName: "",
          userName: "",
          password: "",
          confirmPassword: "",
          email: "",
          phoneNo: "",
          pinCode: "",
          address: ""
        })
    }

  }

  const Validate = (Value) => {
    const errors = {};

    if (!Value.firstName) {
      errors.firstName = "firstName is required";
    }
    if (!Value.lastName) {
      errors.lastName = "lastName is required";
    }
    if (!Value.userName) {
      errors.userName = "userName is required";
    }
    if (!Value.password) {
      errors.password = "password is required";
    }
    if (!Value.confirmPassword) {
      errors.confirmPassword = "confirmPassword is required";
    }
    return errors

  }


  return (
    <>

      <Form HandleInput={HandleInput} Value={Value} HandleSubmit={HandleSubmit} Errors={Errors} Record={Record} />
    </>
  )
}

export default ReusableInput