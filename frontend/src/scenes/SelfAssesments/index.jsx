import React from 'react'
import { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import DangerousIcon from '@mui/icons-material/Dangerous';
import BooleanQuestion from "material-survey/components/BooleanQuestion";
import Alert from '@mui/material/Alert';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import TextField from '@mui/material/TextField';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import axios from "axios";


function createData(number, item, qty, price) {
 return { number, item, qty, price};
}
  
function formatChartData(val,obj) {
  let ans={}
  ans["id"]=val;
  ans["color"]= "hsl(39, 70%, 50%)";
  ans["data"]=[]
  for (const [key, value] of Object.entries(obj)) {
    ans["data"].push({
      "x": key,
      "y": value
    })
  }
  return ans;
}


const SelfAssesments = ({patientData}) => {

  const [rows,setRows] = useState([])
  const [bpchartData,setbpChartData] = useState([])
  const [heightchartData,setheightchartData] = useState([])
  const [weightchartData,setweightchartData] = useState([])
  const [bmichartData,setbmichartData] = useState([])


  const [heartAPIdata, setheartAPIdata] = useState({
    "age": false,
    "sex": -1,
    "severity": false,
    "cholestrol": false,
    "bp": false,
    "heartrate": false
  });

  const [thyroidAPIdata, setthyroidAPIdata] = useState({
    "age": 0.24000,
    "sex": 0,
    "On_thyroxine": 0,
    "Query_on_thyroxine": 0,
    "On_antithyroid_medication": 0,
    "sick": 0,
    "pregnant": 0,
    "thyroidSurgery": 0,
    "I131_treatment": 0,
    "Query_hypothyroid": 0,
    "Query_hyperthyroid": 0,
    "Lithium": 0,
    "Goiter": 0,
    "Tumor": 0,
    "Hypopituitary": 0,
    "Psych": 0,
    "TSH": 0,
    "T3": 0,
    "TT4": 0,
    "T4U": 0,
    "FTI": 0.10800
  });

  const [heartAPIrisk,setheartAPIrisk] = useState(-1);
  const [thyroidAPIrisk,setthyroidAPIrisk] = useState(-1);

  useEffect(() => {
      const fillRows = ()=>{
        let data = patientData.observations;
        for(let i=0;i<data.length;i++){
          if(data[i]){
            setRows(rows=>[...rows,createData( data[i].date, data[i].encounterid,data[i].description,data[i].value)]);
          }
        }
        
      }
      setRows([]);
      fillRows();

  }, [patientData])

  useEffect(() => {
    const fillChart = ()=>{
      var obj = {};
      let data = patientData.observations;
      for(let i=0;i<data.length;i++){
        if(data[i]){
          if(obj[data[i].description]){
            obj[data[i].description][data[i].date]=data[i].value;
          }
          else{
            obj[data[i].description]={};
            obj[data[i].description][data[i].date]=data[i].value;
          }
        }
      }
      console.log(obj);
      let dbp = formatChartData("Diastolic Blood Pressure",obj["Diastolic Blood Pressure"]);
      setbpChartData(bpchartData=>[...bpchartData,dbp])
      let sbp = formatChartData("Systolic Blood Pressure",obj["Systolic Blood Pressure"]);
      // console.log(sbp);
      setbpChartData(chartData=>[...chartData,sbp])
      
      let height = formatChartData("Body Height",obj["Body Height"]);
      setheightchartData(heightchartData=>[...heightchartData,height])
      
      let weight = formatChartData("Body Weight",obj["Body Weight"]);
      setweightchartData(weightchartData=>[...weightchartData,weight])
      
      let bmi = formatChartData("Body Mass Index",obj["Body Mass Index"]);
      setbmichartData(bmichartData=>[...bmichartData,bmi])
      
      let lastCholestrol = Object.values(obj["Total Cholesterol"])[Object.keys(obj["Total Cholesterol"]).length-1];
      setheartAPIdata(heartAPIdata => ({...heartAPIdata,cholestrol:lastCholestrol}))

      let lastBP = Object.values(obj["Systolic Blood Pressure"])[Object.keys(obj["Systolic Blood Pressure"]).length-1];
      setheartAPIdata(heartAPIdata => ({...heartAPIdata,bp:lastBP}))

      let lastHeartRate = Object.values(obj["Heart rate"])[Object.keys(obj["Heart rate"]).length-1];
      setheartAPIdata(heartAPIdata => ({...heartAPIdata,heartrate:lastHeartRate}))
    }
    setbpChartData([]);
    setheightchartData([]);
    setweightchartData([]);
    setbmichartData([]);
    fillChart();

}, [patientData])

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function getGender(genderString){
    if(genderString === "M") return 1;
    return 0;
}

useEffect(() => {
    if(patientData){
        setheartAPIdata(heartAPIdata => ({...heartAPIdata,age:getAge(patientData.birthDate)}))
        setheartAPIdata(heartAPIdata => ({...heartAPIdata,sex:getGender(patientData.gender)}))
        setthyroidAPIdata(thyroidAPIdata => ({...thyroidAPIdata,age:getAge(patientData.birthDate)}))
        setthyroidAPIdata(thyroidAPIdata => ({...thyroidAPIdata,sex:getGender(patientData.gender)}))
    }
}, [patientData])

useEffect(() => {
    console.log(heartAPIdata);
}, [heartAPIdata])


  

// console.log(rows);
  return (
    <>
        <div style={{'width':'90%','display':'flex','flexDirection':'row'}}>
            <div className="container w-50 h-50  m-4">
                <Box sx={{ width: '100%', bgcolor: 'background.paper',padding:'1em' }}>
                    <h5>Check your <FavoriteIcon/> health!</h5>
                    <TextField 
                        sx={{
                            width:"80%"
                        }}
                        id="Age" 
                        label="Age" 
                        variant="standard" 
                        value={(heartAPIdata.age)?heartAPIdata.age:''}
                        onChange={(e) =>setheartAPIdata(heartAPIdata => ({...heartAPIdata,age:e.target.value}))}
                    />
                    <br/><br/>
                    <TextField 
                        sx={{
                            width:"80%"
                        }}
                        id="Gender" 
                        label="Gender" 
                        variant="standard" 
                        value={(heartAPIdata.sex!=-1)?((heartAPIdata.sex==1)?"male":"female"):''}
                        // value={(heartAPIdata.sex!=-1)?heartAPIdata.sex:''}
                    />
                    <br/><br/>
                    <TextField 
                        sx={{
                            width:"80%"
                        }}
                        id="Blood Pressure" 
                        label="Blood Pressure" 
                        variant="standard" 
                        value={(heartAPIdata.bp)?heartAPIdata.bp:''}
                        onChange={(e) =>setheartAPIdata(heartAPIdata => ({...heartAPIdata,bp:e.target.value}))}
                    />
                    <br/><br/>
                    <TextField 
                        sx={{
                            width:"80%"
                        }}
                        id="Cholestrol" 
                        label="Cholestrol" 
                        variant="standard" 
                        value={(heartAPIdata.cholestrol)?heartAPIdata.cholestrol:''}
                        onChange={(e) =>setheartAPIdata(heartAPIdata => ({...heartAPIdata,cholestrol:e.target.value}))}
                    />
                    <br/><br/>
                    <TextField 
                        sx={{
                            width:"80%"
                        }}
                        id="Heartrate" 
                        label="Heartrate" 
                        variant="standard" 
                        value={(heartAPIdata.heartrate)?heartAPIdata.heartrate:''}
                        onChange={(e) =>setheartAPIdata(heartAPIdata => ({...heartAPIdata,heartrate:e.target.value}))}
                    />
                    <br/><br/>
                    <Typography id="input-slider" gutterBottom>
                        How do you rate your chest pains?
                    </Typography>
                    <br/>
                    <Slider
                        aria-label="Small steps"
                        defaultValue={3}
                        step={1}
                        marks
                        min={0}
                        max={5}
                        valueLabelDisplay="auto"
                        sx={{
                            width:"80%"
                        }}
                        onChange={(e) =>setheartAPIdata(heartAPIdata => ({...heartAPIdata,severity:e.target.value}))}
                    />
                    <br/>
                    <Button 
                        variant="contained" 
                        endIcon={<FavoriteIcon />} 
                        size="large"
                        onClick={async() => {
                            await axios.post("https://wecare-model.herokuapp.com/heartDisease",heartAPIdata).then((response) => {
                                console.log(response.data);
                                if(response.data.response === 'Presence'){
                                    setheartAPIrisk(true);
                                }else{
                                    setheartAPIrisk(false);
                                }
                            });
                        }}
                    >
                        Check
                    </Button>
                    <br/>
                    <br/>
                    {
                        (heartAPIrisk===true)?
                        (
                            <Alert sx={{ width: '70%', bgcolor: 'background.paper' }} severity="warning">
                                You might be at risk of Heart Disease! Please visit your doctor
                            </Alert>
                        ):(
                            
                                (heartAPIrisk!==-1)?(
                                    <Alert sx={{ width: '70%', bgcolor: 'background.paper' }} severity="success">
                                        Your vital seems right! keep it up
                                    </Alert>
                                ):''
                            
                            
                        )
                    }
                    
                </Box>
            </div>
            <div className="container w-50 h-50  m-4">
                <Box sx={{ width: '100%', bgcolor: 'background.paper',padding:'1em' }}>
                    <h5>Check your Thyroid health!</h5>
                    <TextField 
                        sx={{
                            width:"80%"
                        }}
                        id="Age" 
                        label="Age" 
                        variant="standard" 
                        value={(thyroidAPIdata.age)?thyroidAPIdata.age:''}
                        onChange={(e) =>setthyroidAPIdata(thyroidAPIdata => ({...thyroidAPIdata,age:e.target.value}))}
                    />
                    <br/><br/>
                    <TextField 
                        sx={{
                            width:"80%"
                        }}
                        id="Gender" 
                        label="Gender" 
                        variant="standard" 
                        value={(thyroidAPIdata.sex!=-1)?((thyroidAPIdata.sex==1)?"male":"female"):''}
                    />
                    <br/><br/>
                    <TextField 
                        sx={{
                            width:"80%"
                        }}
                        id="TSH" 
                        label="TSH" 
                        variant="standard" 
                        value={(thyroidAPIdata.TSH)?thyroidAPIdata.TSH:''}
                        onChange={(e) =>setthyroidAPIdata(thyroidAPIdata => ({...thyroidAPIdata,TSH:e.target.value}))}
                    />
                    <br/><br/>
                    <TextField 
                        sx={{
                            width:"80%"
                        }}
                        id="T3" 
                        label="T3" 
                        variant="standard" 
                        value={(thyroidAPIdata.T3)?thyroidAPIdata.T3:''}
                        onChange={(e) =>setthyroidAPIdata(thyroidAPIdata => ({...thyroidAPIdata,T3:e.target.value}))}
                    />
                    <br/><br/>
                    <TextField 
                        sx={{
                            width:"80%"
                        }}
                        id="TT4" 
                        label="TT4" 
                        variant="standard" 
                        value={(thyroidAPIdata.TT4)?thyroidAPIdata.TT4:''}
                        onChange={(e) =>setthyroidAPIdata(thyroidAPIdata => ({...thyroidAPIdata,TT4:e.target.value}))}
                    />
                    <br/><br/>
                    <TextField 
                        sx={{
                            width:"80%"
                        }}
                        id="T4U" 
                        label="T4U" 
                        variant="standard" 
                        value={(thyroidAPIdata.T4U)?thyroidAPIdata.T4U:''}
                        onChange={(e) =>setthyroidAPIdata(thyroidAPIdata => ({...thyroidAPIdata,T4U:e.target.value}))}
                    />
                    <br/><br/>
                    <Button 
                        variant="contained" 
                        endIcon={<FavoriteIcon />} 
                        size="large"
                        onClick={async() => {
                            await axios.post("https://wecare-model.herokuapp.com/thyroidDisease",thyroidAPIdata).then((response) => {
                                console.log(response.data);
                                if(response.data.response > 3){
                                    setthyroidAPIrisk(true);
                                }else{
                                    setthyroidAPIrisk(false);
                                }
                            });
                        }}
                    >
                        Check
                    </Button>
                    <br/>
                    <br/>
                    {
                        (thyroidAPIrisk===true)?
                        (
                            <Alert sx={{ width: '70%', bgcolor: 'background.paper' }} severity="warning">
                                You might be at risk of Thyroid Disease! Please visit your doctor
                            </Alert>
                        ):(
                            
                                (thyroidAPIrisk!==-1)?(
                                    <Alert sx={{ width: '70%', bgcolor: 'background.paper' }} severity="success">
                                        Your vital seems right! keep it up
                                    </Alert>
                                ):''
                            
                            
                        )
                    }
                </Box>
            </div>
        </div>
   </>
    );
};

export default SelfAssesments;
