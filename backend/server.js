import mongoose from 'mongoose'
import express from 'express'
import patientsData from './routes/patients.js'
import encountersData from './routes/encounters.js'
import immunizationsData from './routes/immunizations.js'
import conditionsData from './routes/conditions.js'
import allergiesData from './routes/allergies.js'
import devicesData from './routes/devices.js'
import imagingstudiesData from './routes/imagingstudies.js'
import observationsData from './routes/observations.js'
import careplansData from './routes/careplans.js'
import proceduresData from './routes/procedures.js'
import suppliesData from './routes/supplies.js'
import medicatonsData from './routes/medications.js'
import Cors from 'cors'
import "./config.js"

const DBusername = process.env.DBusername;
const DBpassword = process.env.DBpassword;
const DBname = process.env.DBname;
const DBcluster = process.env.DBcluster;


const app = express()
const port = process.env.PORT || 8001;


app.use(express.json());
app.use(Cors());
app.use('/patient',patientsData);
app.use('/encounter',encountersData);
app.use('/immunization',immunizationsData);
app.use('/condition',conditionsData);
app.use('/allergy',allergiesData);
app.use('/device',devicesData);
app.use('/imagingstudy',imagingstudiesData);
app.use('/observation',observationsData);
app.use('/careplan',careplansData);
app.use('/procedure',proceduresData);
app.use('/supply',suppliesData);
app.use('/medication',medicatonsData);

const connection_url = `mongodb+srv://${DBusername}:${DBpassword}@${DBname}.${DBcluster}.mongodb.net/?retryWrites=true&w=majority`;

mongoose
    .connect(connection_url)
    .then((result) => {
        console.log("Connected To Database");
        app.listen(port, () => console.log(`Listening on Localhost:${port}`))
    })
    .catch((err) => {
        console.log('\x1b[31m',"Error Connecting to Database");
    });