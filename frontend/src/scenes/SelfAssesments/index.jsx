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


  const [heartAPIdata, setheartAPIdata] = useState({});
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
    if(genderString == 'M') return 1;
    return 0;
}

useEffect(() => {
    if(patientData){
        console.log(getAge(patientData.birthDate))
        console.log(getGender(patientData.gender));
    }
}, [patientData])


  

// console.log(rows);
  return (
    <>
        <div style={{'width':'90%','display':'flex','flexDirection':'row'}}>
            <div className="container w-50 h-50  m-4">
                <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    
                    helo
                </Box>
            </div>
            <div className="container w-50 h-50  m-4">
                <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    helo
                </Box>
            </div>
        </div>
   </>
    );
};

export default SelfAssesments;
