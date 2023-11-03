import React,{useContext} from 'react'
import { Button,  TextField, } from '@mui/material';
import { multistepContext } from './Stepcontext';
import '../Components/ThirdForm.css'
const Thirdform = () => {
  const { setStep, userData, setUserData } = useContext(multistepContext);
  const handleInputChange = (fieldName, value) => {
    setUserData({ ...userData, [fieldName]: value });
  };

  return (
    <div className='parent-containerrr'>
<div className="form-containerr">
      <div className="personal-detaills">
        <h1>Address Details</h1>
      </div>
      
          
        <div className="input-fieldds">
        <div className="name-sectionn">
          <h3 className="headingg">Country/Region</h3>
          
          <TextField label="Country" variant="outlined" className="input-field" 
           value={userData.country || ''} 
           onChange={(e) => handleInputChange('country', e.target.value)} 
          
          />
          
        </div>
        </div>
        <div className="input-fieldds">
        <div className="name-sectionn">
          <h3 className="headingg">Postal Code</h3>
          
          <TextField label="postal code" variant="outlined" className="input-field"
           value={userData.postalcode || ''} 
           onChange={(e) => handleInputChange('postalcode', e.target.value)} 
          />
          
        </div>
        
        
    
        <div className="input-fieldds">
        <div className="name-sectionn">
          <h3 className="headingg">Street/Area Name</h3>
          
          <TextField label="Street/Area Name" variant="outlined" className="input-field"
           value={userData.streetname || ''} 
           onChange={(e) => handleInputChange('streetname', e.target.value)} 
          
          />
          
        </div>
        </div>
        <div className="input-fieldds">
        <div className="name-sectionn">
          <h3 className="headingg">Appartment/Bulding No</h3>
          
          <TextField label="Apartment/Building No" variant="outlined" className="input-field"
           value={userData.appartment|| ''} 
           onChange={(e) => handleInputChange('appartment', e.target.value)} 
          
          
          />
          
        </div>
        </div>
        </div>
        

        <div className="button-container">
        
        <Button variant="contained" color="secondary" className="submit-buttons" onClick={() => setStep(2)}>
          Back
        </Button>
        <Button variant="contained" color="secondary" className="submit-buttons" onClick={() => setStep(4)}>
          Next
        </Button>
      </div>
        
      </div>
      </div>
  )
}

export default Thirdform