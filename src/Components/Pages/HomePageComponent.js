import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const HomePageComponent = () => {

    const navigate = useNavigate()

    const handlePageChange = () => {
        navigate('PageTwo')
    }

    const handlePageChange2 = () => {
        navigate('PageFour')
    }


  return (
    <div>
      <h1>This is Home Page</h1>
      <Button variant="warning" onClick={handlePageChange} >Next Page</Button>
      
      <Button variant="dark" onClick={handlePageChange2} >Back Page</Button>

    </div>
  )
}

export default HomePageComponent
