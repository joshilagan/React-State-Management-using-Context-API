import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'

const Home = () => {
  const{username} = useContext (AppContext) 
  return (
    <h1>This is the homepage and we'll use: {username} for State Management </h1>
  )
}

export default Home