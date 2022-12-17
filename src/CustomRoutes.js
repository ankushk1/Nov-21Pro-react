import React from 'react'
import { Navigate } from 'react-router-dom';

export const CustomRoutes = ({children}) => {

  const user = localStorage.getItem('userData');

  if(!user) {
    return <Navigate to={'/signin'}/>
  } 
  return children
}
