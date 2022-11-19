import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

  const navigate = useNavigate()

  // const history = useHistory()
  const onHandleSignup = () => {
    // We need to validate fields

    // Api will be called

    // We will get response
    // history.push("/", {a:"a"})
    navigate('/100/aman', {
      state: {
        comingFrom:"Signup",
        arr: [1,2,3,4],
        route: true,
      }
    })
    // navigate(-1)
  }

  return (
    <div>Signup
       {/* Filled the form */}

       <div>
       <button onClick={() => onHandleSignup()} className="btn btn-secondary">Sign Up</button>
       </div>

    </div>
  )
}

export default Signup