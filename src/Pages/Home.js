import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Home = () => {

  const location = useLocation();
  console.log(location.state);

  const params = useParams();
  console.log(params)

  return (
    <div>Home</div>
  )
}

export default Home