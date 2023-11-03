import React from 'react';
import { Stepper, StepLabel, Step } from '@mui/material';
import { multistepContext } from './Components/Stepcontext';
import FirstForm from './Components/FirstForm';
import SecondForm from './Components/Secondform';
import ThirdForm from './Components/Thirdform';
import Fourthform from './Components/Fourthform'
import Fifthform from './Components/FifthForm'
import './App.css'
// Import other form components as needed

function App() {
  const { currentStep } = React.useContext(multistepContext);

  function showstep(step) {
    switch (step) {
      case 1:
        return <FirstForm />;
      case 2:
        return <SecondForm />;
      case 3:
        return <ThirdForm />;
        case 4:
        return <Fourthform/>;
        case 5:
        return <Fifthform/>;
      
      default:
        return null;
    }
  }

  return (
    <div className='App'>
      <div className='Center-stepper'>
        <Stepper style={{ width: '18',margin: '2 0'}} activeStep={currentStep - 1} orientation='horizontal'
        classes={{ root: 'custom-stepper-root', alternativeLabel: 'custom-stepper-alternativeLabel' }}
        
        >
          
          <Step>
          <StepLabel ></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          
        </Stepper>
      </div>
      {showstep(currentStep)}
    </div>
  );
}

export default App;
