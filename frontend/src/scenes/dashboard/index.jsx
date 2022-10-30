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
      </Box>
      <Box display="flex" width="30%" flexDirection="column">
        <BasicCard title="BirthDate"  desc={birthDate.toDateString()}/>
        <BasicCard title="Driving Licence"  desc={patientData.driversLicence}/>
        <BasicCard title="Address"  desc={patientData.address}/>
      </Box>
      <Box display="flex" width="30%" flexDirection="column">
        <BasicCard title="Passport"  desc={patientData.passport}/>
        <BasicCard title="Race"  desc={patientData.race}/>
        <BasicCard title="City"  desc={patientData.city}/>
      </Box>
    
    {/* "birthDate": "1989-09-21T00:00:00.000Z",
        "deathDate": null,
        "SSN": "999-49-1746",
        "driversLicence": "S99930070",
        "passport": "X79585760X",
        "prefix": "Mr.",
        "first": "Murray856",
        "last": "Johnson679",
        "suffix": "",
        "maiden": "",
        "marital": "M",
        "race": "black",
        "ethnicity": "nonhispanic",
        "gender": "M",
        "birthplace": "North Scituate  Massachusetts  US",
        "address": "181 Nader Mews",
        "city": "Boston",
        "state": "Massachusetts",
        "zip": "2152", */}
      </Box>      
    </>
    )
}

export default Dashboard