import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'

const Contact = () => {
  const {username} = useContext(AppContext)

  return (
    <h1>Please contact: {username} Team</h1>
  )
}

export default Contact