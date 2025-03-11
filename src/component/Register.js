import React, {useState} from 'react'
import axios from 'axios';

const Register = () => {
  const [data, setData] = useState({
    name:'',
    gender:'',
    age:'',
    mobile:'',
    email:'',
    password:'',
    confirmpassword:'',
    state:'',
    city:'',
    address:'',
    pincode:''
  })
  const changeHandler = e =>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const  submitHandler = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/register',data).then(
      res => alert(res.data)
    )
  }
  return (
    <div>
      <from onSubmit ={submitHandler} >
        <h3>Op Register</h3>
        <input
        type="text"
        onChange={changeHandler}
        name="name"
        placeholder="Enter your name"
      />
      <br />
      <input
        type="text"
        onChange={changeHandler}
        name="gender"
        placeholder="Enter your gender"
      />
      <br />
      <input
        type="text"
        onChange={changeHandler}
        name="age"
        placeholder="Enter your age"
      />
      <br />
      <input
        type="text"
        onChange={changeHandler}
        name="mobile"
        placeholder="Enter your mobile number"
      />
      <br />
      <input
        type="email"
        onChange={changeHandler}
        name="email"
        placeholder="Enter your email"
      />
      <br />
      <input
        type="password"
        onChange={changeHandler}
        name="password"
        placeholder="Enter your password"
      />
      <br />
      <input
        type="password"
        onChange={changeHandler}
        name="confirmPassword"
        placeholder="Enter your confirm password"
      />
      <br />
      <input
        type="text"
        onChange={changeHandler}
        name="state"
        placeholder="Enter your state"
      />
      <br />
      <input
        type="text"
        onChange={changeHandler}
        name="city"
        placeholder="Enter your city"
      />
      <br />
      <input
        type="text"
        onChange={changeHandler}
        name="address"
        placeholder="Enter your address"
      />
      <br />
      <input
        type="text"
        onChange={changeHandler}
        name="pincode"
        placeholder="Enter your pincode"
      />
      <br />
      <input type="submit" value="Register" />

      </from>
      
    </div>
  )
}

export default Register
