import React, { useState } from 'react';
import './App.css';
import MapContainer from './Map';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const App = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [timeInSeconds, setTimeInSeconds] = useState('');

  const handleSimulateClick = () => {
    if (latitude && longitude && timeInSeconds) {
      // Convert input to numbers
      const lat = parseFloat(latitude);
      const lng = parseFloat(longitude);
      const time = parseInt(timeInSeconds);
      setTimeInSeconds('')
      // if (!isNaN(lat) && !isNaN(lng) && !isNaN(time)) {
      //   // Trigger the drone motion simulation
      //   // You can adjust the input validation and error handling as needed
      //   // For simplicity, I'm assuming the input is valid
      //   // The simulation will update the drone's position on the map
      //   // and display the routing path
      //   // The simulation time will be specified by the user
      //   // In this example, I'm using 10 seconds as the default time
      //   setTimeInSeconds(time);
      // }
    }
  };

  return (
    <div className="App">
      <div className='container'>
        <div className='heading'>Dron Simulator</div>
        <TextField
          id="outlined-multiline-flexible"
          label="Latitude"
          size="small"
          maxRows={3}
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Longitude"
          size="small"
          maxRows={3}
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Time"
          size="small"
          maxRows={3}
          onChange={(e) => setTimeInSeconds(e.target.value)}
          value={timeInSeconds}
        />
        <Button variant="contained" onClick={handleSimulateClick}>simulate</Button>
      </div>
      <div className='divider'></div>
      <div className='MapCont'>
        <MapContainer latitude={latitude} longitude={longitude} timeInSeconds={timeInSeconds} />
      </div>


    </div>
  );
};

export default App;
