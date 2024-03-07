 import React from 'react'
 import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
 
 const PageThreeComponent = () => {

    const navigate = useNavigate()

    const navigateTwo = useNavigate()

    const handlePageChange = () => {
        navigateTwo('/PageFour')
    }

    const handlePageChange2 = () => {
        navigate('/PageTwo')
    }

   return (
     <div>
        <h1>This is Page 3</h1>

        <Button variant="warning" onClick={handlePageChange} >Next Page</Button>
      
        <Button variant="dark" onClick={handlePageChange2} >Back Page</Button>

     </div>
   )
 }
 
 export default PageThreeComponent
 