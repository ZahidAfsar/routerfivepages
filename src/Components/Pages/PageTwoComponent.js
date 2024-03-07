import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const PageTwoComponent = () => {

    const navigate = useNavigate()

    const navigateTwo = useNavigate()

    const handlePageChange = () => {
        navigateTwo('/PageThree')
    }

    const handlePageChange2 = () => {
        navigate('/')
    }


  return (
    <div>
        <h1>This is Page 2</h1>

        <Button variant="warning" onClick={handlePageChange} >Next Page</Button>
      
        <Button variant="dark" onClick={handlePageChange2} >Back Page</Button>
    </div>
  )
}

export default PageTwoComponent
