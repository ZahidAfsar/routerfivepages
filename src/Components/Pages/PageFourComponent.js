import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const PageFourComponent = () => {

    const navigate = useNavigate()

    const navigateTwo = useNavigate()

    const handlePageChange = () => {
        navigate('/')
    }

    const handlePageChange2 = () => {
        navigateTwo('/PageThree')
    }


  return (
    <div>
      <h1>This is the last page</h1>
      <Button variant="warning" onClick={handlePageChange} >Next Page</Button>
      
      <Button variant="dark" onClick={handlePageChange2} >Back Page</Button>

    </div>
  )
}

export default PageFourComponent
