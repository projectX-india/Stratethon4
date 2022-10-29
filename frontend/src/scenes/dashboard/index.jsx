import React from 'react'

const Dashboard = ({patientData}) => {
  return (
    <div className='container'>
    <div>Dashboard</div>
    <div>Id => {patientData.id}</div>
    <div>BirthDate => {patientData.birthDate}</div>
    <div>DeathDate => {patientData.deathDate}</div>
    <div>Driving Licence => {patientData.driversLicence}</div>
    <div>Passport => {patientData.passport}</div>
    <div>Race => {patientData.race}</div>
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
    </div>      
    )
}

export default Dashboard