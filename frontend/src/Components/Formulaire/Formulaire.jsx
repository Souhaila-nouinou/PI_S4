import React from 'react'
import { useState } from "react";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function Formulaire() {
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
  return (


    <div>

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

      <form onSubmit={handleSubmit} >
        <label>Enter your name:
          <input
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
          />
        </label>
        <label>Enter your age:
          <input
            type="number"
            name="age"
            value={inputs.age || ""}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
        <br />
        <label>what do you have:
          <input
            type="radio"
            name="site_name"
          /* value={result.SITE_NAME}
          checked={this.state.site === result.SITE_NAME}
          onChange={this.onSiteChanged} */
          />
        </label>
      </form>
    </div>
  )
}

export default Formulaire