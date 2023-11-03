import React,{useContext} from 'react'
import { Button,  TextField, } from '@mui/material';
import { multistepContext } from './Stepcontext';
const FifthForm = () => {
  const { setStep, userData, setUserData,submitData } = useContext(multistepContext);
  
  const handleInputChange = (fieldName, value) => {
    setUserData({ ...userData, [fieldName]: value });
  };
  return (
    <div className='parent-containerrr'>
    <div className="form-containerr">
    <div className="personal-detaills">
      <h1>Payment Details</h1>
    </div>
    
      <div className="input-fieldds">
      <div className="name-sectionn">
        <h3 className="headingg">Shipping Address</h3>
        
        <TextField label="shipping-address" variant="outlined" className="input-field"
        value={userData.shipping || ''} 
        onChange={(e) => handleInputChange('shipping', e.target.value)}  />
        
      </div>
      </div>
      <div className="input-fieldss">
      <div className="name-sectionn">
        <h3 className="headingg">Your order ID</h3>
        
        <TextField label="Your order ID" variant="outlined" className="input-field"
        
        value={userData.id || ''} 
           onChange={(e) => handleInputChange('id', e.target.value)} />
        
      </div>
      <div className="input-fieldds">
      <div className="name-sectionn">
        <h3 className="headingg">Mode of Payment</h3>
        
        <TextField label="Mode of Payment" variant="outlined" className="input-field"
        value={userData.payment || ''} 
        onChange={(e) => handleInputChange('payment', e.target.value)} 
        
        />
        
      </div>
      </div>
      <div className="input-fieldds">
      <div className="name-sectionn">
        <h3 className="headingg">Date of Payment</h3>
        
        <TextField label="Date of payment" variant="outlined" className="input-field" 
        value={userData.date || ''} 
        onChange={(e) => handleInputChange('date', e.target.value)} 
        
        />
        
      </div>
      </div>
  
     
      
      </div>
      <div className='button-container'>
      <Button variant="contained" color="secondary" className="submit-buttons"onClick={()=>setStep(4)}>
       Back
      </Button>
      <Button variant="contained" color="secondary" className="submit-buttons"onClick={submitData}>
        Submit
      </Button>
      </div>
      
    </div>
    </div>

   
 
  )
}

export default FifthForm