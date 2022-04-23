import React from 'react'
import { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './Formulaire.css'
import CircularStatic from './ProgressBar'
import { MDBContainer, MDBInputGroup } from "mdbreact";
/* import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';
 *//* import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit'; */
import HorizontalStepperWithError from './HorizontalStepperWithError'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function Formulaire() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const [inputs, setInputs] = useState({});
  const dataset = ['nodal_skin_eruptions', 'shivering', 'ulcers_on_tongue',
    'muscle_wasting', 'spotting_ urination', 'high_fever', 'sunken_eyes',
    'sweating', 'pain_behind_the_eyes', 'mild_fever', 'swelling_of_stomach',
    'malaise', 'throat_irritation', 'weakness_in_limbs',
    'pain_during_bowel_movements', 'cramps', 'enlarged_thyroid',
    'slurred_speech', 'knee_pain', 'muscle_weakness', 'movement_stiffness',
    'unsteadiness', 'bladder_discomfort', 'passage_of_gases',
    'toxic_look_(typhos)', 'irritability', 'altered_sensorium',
    'red_spots_over_body', 'increased_appetite', 'family_history',
    'mucoid_sputum', 'rusty_sputum', 'lack_of_concentration',
    'visual_disturbances', 'receiving_blood_transfusion', 'coma',
    'blood_in_sputum', 'pus_filled_pimples', 'skin_peeling', 'blister',
    'prognosis']
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }
  const scrollContainerStyle = { width: "800px", maxHeight: "400px" };
  return (

    <MDBContainer>
      <div className='Formulaire' >
        <HorizontalStepperWithError></HorizontalStepperWithError>
        <CircularStatic />
        <br />
        <div className="scrollbar scrollbar-primary  mt-5 mx-auto" style={scrollContainerStyle}>
        <div id="Questions">
            {dataset.map((element) =>
              <>
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">do you have : {element}</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
                <br />
              </>
            )
            }
          </div>
        </div>
      </div>
    </MDBContainer>
  )
}

export default Formulaire