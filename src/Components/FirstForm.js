import React, { useContext } from 'react';
import { Button, Select, MenuItem, TextField } from '@mui/material';
import '../Components/Form.css';
import { multistepContext } from './Stepcontext';

const FirstForm = () => {
  const { setStep, userData, setUserData } = useContext(multistepContext);

  const handleTitleChange = (e) => {
    setUserData({ ...userData, title: e.target.value });
  };

  const handleNameChange = (e) => {
    setUserData({ ...userData, name: e.target.value });
  };

  return (
    <div className='parent-container'>
    <div className="form-container">
      <div className="personal-details">
        <h1>Personal Details</h1>
      </div>
      <div className="input-fields">
        <div className="name-section">
          <h3 className="heading">Prefix</h3>
          <Select
            value={userData.title || ''}
            onChange={handleTitleChange}
            variant="outlined"
            className="input-field"
            style={{ width: '100%' }}
            label='Title'
          >
            <MenuItem value="Mr.">Mr.</MenuItem>
            <MenuItem value="Mrs.">Mrs.</MenuItem>
            <MenuItem value="Miss">Miss</MenuItem>
          </Select>
          
        
          
         </div>
         <div className="input-fields">
        <div className="name-section">
          <h3 className="heading">Name</h3>
          
            
          
          <TextField
            label="Full Name"
            variant="outlined"
            className="input-field"
            value={userData.name || ''}
            onChange={handleNameChange}

          />
        </div>
          
          </div>
          
        
        <Button variant="contained" color='secondary'  className="submit-button" onClick={() => setStep(2)}>
          Next
        </Button>
      </div>
    </div>
    </div>
  );
};

export default FirstForm;
