import React, { useContext } from 'react';
import { Button, TextField } from '@mui/material';
import { multistepContext } from './Stepcontext';
import '../Components/SecondForm.css'

const Secondform = () => {
  const { setStep, userData, setUserData } = useContext(multistepContext);

  const handleInputChange = (fieldName, value) => {
    setUserData({ ...userData, [fieldName]: value });
  };

  return (
    <div className='parent-containers'>
    <div className="form-containers">
      <div className="personal-detailss">
        <h1>Contact Details</h1>
      </div>
      <div className="input-fieldss">
        <div className="name-sectionn">
          <h3 className="headings">E-mail</h3>
          <TextField
            label="Email"
            variant="outlined"
            className="input-field"
            value={userData.email || ''} 
            onChange={(e) => handleInputChange('email', e.target.value)} 
          />
        </div>
        <div className="input-fieldss">
          <div className="name-sectionn">
            <h3 className="headings">Phone Number</h3>
            

            <TextField
              label="Phone No"
              variant="outlined"
              className="input-field"
              value={userData['phone no'] || ''}
              onChange={(e) => handleInputChange('phone no', e.target.value)}
              
            />
          </div>
        </div>
        <div className="input-fieldss">
          <div className="name-sectionn">
            <h3 className="headings">Landline Number</h3>
            <TextField
              label="Landline no"
              variant="outlined"
              className="input-field"
              value={userData['Landline no'] || ''}
              onChange={(e) => handleInputChange('Landline no', e.target.value)}
            />
          </div>
        </div>
        <div className="button-container">
        
        <Button variant="contained" color="secondary" className="submit-buttons" onClick={() => setStep(1)}>
          Back
        </Button>
        <Button variant="contained" color="secondary" className="submit-buttons" onClick={() => setStep(3)}>
          Next
        </Button>
      </div>
    </div>
      </div>
      </div>
    
  );
};

export default Secondform;
