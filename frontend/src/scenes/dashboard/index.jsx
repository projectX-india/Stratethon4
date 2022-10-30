import React from 'react'
import { Box } from "@mui/material";
import BasicCard from '../../components/cards'

const Dashboard = ({patientData}) => {
  var birthDate = new Date(patientData.birthDate);
  var deathDate = new Date(patientData.deathDate);
            
  // date.toDateString()
  return (
    <>
      <h3 className='m-4'>Dashboard</h3>
      <Box display="flex" flexDirection="row">
          <Box display="flex" width="30%" flexDirection="column">
            <BasicCard title="Id"  desc={patientData.id}/>
            <BasicCard title="Income"  desc={patientData.income}/>
            <BasicCard title="Birth Place"  desc={patientData.birthplace}/>
            <BasicCard title="Marital"  desc={patientData.marital}/>
          </Box>
          <Box display="flex" width="30%" flexDirection="column">
            <BasicCard title="BirthDate"  desc={birthDate.toDateString()}/>
            <BasicCard title="Driving Licence"  desc={patientData.driversLicence}/>
            <BasicCard title="Address"  desc={patientData.address}/>
            <BasicCard title="Enthnicity"  desc={patientData.ethnicity}/>
          </Box>
          <Box display="flex" width="30%" flexDirection="column">
            <BasicCard title="Gender"  desc={patientData.gender}/>
            <BasicCard title="Race"  desc={patientData.race}/>
            <BasicCard title="City"  desc={patientData.city}/>
            <BasicCard title="Passport"  desc={patientData.passport}/>
          </Box>
      </Box>      
    </>
    )
}

export default Dashboard