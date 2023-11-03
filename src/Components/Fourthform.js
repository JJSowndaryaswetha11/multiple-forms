import React,{useContext} from 'react'
import { Button,  TextField, } from '@mui/material';
import { multistepContext } from './Stepcontext';
const Fourthform = () => {
  const { setStep, userData, setUserData } = useContext(multistepContext);
  const handleInputChange = (fieldName, value) => {
    setUserData({ ...userData, [fieldName]: value });
  };

  return (
    <div className='parent-containerrr'>
    <div className="form-containerr">
    <div className="personal-detaills">
      <h1>Order Details</h1>
    </div>
    
      <div className="input-fieldds">
      <div className="name-sectionn">
        <h3 className="headingg">Product Name</h3>
        
        <TextField label="Product Name" variant="outlined" className="input-field"
        value={userData.product || ''} 
        onChange={(e) => handleInputChange('product', e.target.value)}  />
        
      </div>
      </div>
      <div className="input-fieldss">
      <div className="name-sectionn">
        <h3 className="headingg">Product Price</h3>
        
        <TextField label="Product Price" variant="outlined" className="input-field"
        
        value={userData.price || ''} 
           onChange={(e) => handleInputChange('price', e.target.value)} />
        
      </div>
      <div className="input-fieldds">
      <div className="name-sectionn">
        <h3 className="headingg">Your order id</h3>
        
        <TextField label="Order ID" variant="outlined" className="input-field"
        value={userData.id || ''} 
        onChange={(e) => handleInputChange('id', e.target.value)} 
        
        />
        
      </div>
      </div>
      <div className="input-fieldds">
      <div className="name-sectionn">
        <h3 className="headingg">Sum</h3>
        
        <TextField label="Sum" variant="outlined" className="input-field" 
        value={userData.sum || ''} 
        onChange={(e) => handleInputChange('sum', e.target.value)} 
        
        />
        
      </div>
      </div>
  
     
      
      </div>
      <div className='button-container'>
      <Button variant="contained" color="secondary" className="submit-buttons"onClick={()=>setStep(3)}>
       Back
      </Button>
      <Button variant="contained" color="secondary" className="submit-buttons"onClick={()=>setStep(5)}>
        Next
      </Button>
      </div>
      
    </div>
    </div>
  )
}

export default Fourthform