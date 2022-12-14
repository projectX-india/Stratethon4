import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import MyResponsiveLine from "../../components/line";
import { useState, useEffect } from "react";

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


const Observations = ({patientData}) => {

  const [rows,setRows] = useState([])
  const [bpchartData,setbpChartData] = useState([])
  const [heightchartData,setheightchartData] = useState([])
  const [weightchartData,setweightchartData] = useState([])
  const [bmichartData,setbmichartData] = useState([])
  
  useEffect(() => {
      const fillRows = ()=>{
        let data = patientData.observations;
        for(let i=0;i<data.length;i++){
          if(data[i]){
            var date = new Date(data[i].date);
            setRows(rows=>[...rows,createData( date.toDateString(), data[i].encounterid,data[i].description,data[i].value)]);
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
          var date = new Date(data[i].date);
          if(obj[data[i].description]){
            obj[data[i].description][date.toDateString()]=data[i].value;
          }
          else{
            obj[data[i].description]={};
            obj[data[i].description][date.toDateString()]=data[i].value;
          }
        }
      }
      
      let dbp = formatChartData("Diastolic Blood Pressure",obj["Diastolic Blood Pressure"]);
      setbpChartData(bpchartData=>[...bpchartData,dbp])
      
      let sbp = formatChartData("Systolic Blood Pressure",obj["Systolic Blood Pressure"]);
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

  

// console.log(rows);
  return (
    <>
      <h3 className="m-4">Observations</h3>
      {/* <div className="container p-4" style={{
        overflow:"scroll",
        maxHeight:"80%"
      }}>
      <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Encounter Id</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.number}>
              <TableCell component="th" scope="row">
                {row.number}
              </TableCell>
              <TableCell align="right">{row.item}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div> */}
    <div style={{'height':'100%','width':'90%','display':'flex','flexDirection':'row'}}>
    <div className="container w-50 h-50  m-4">
        <h4>Blood Pressure Observations</h4>
        <div className="container w-100 h-100 m-2 p-1 bg-light text-dark">
          <MyResponsiveLine data={bpchartData}/>
        </div>
        <h4>Height Observations</h4>
        <div className="container w-100 h-100 m-2 p-1 bg-light text-dark">
          <MyResponsiveLine data={heightchartData}/>
        </div>
    </div>
    <div className="container w-50 h-50  m-4">
        <h4>Weight Observations</h4>
        <div className="container w-100 h-100 m-2 p-1 bg-light text-dark">
          <MyResponsiveLine data={weightchartData}/>
        </div>
        <h4>BMI Observations</h4>
        <div className="container w-100 h-100 m-2 p-1 bg-light text-dark">
          <MyResponsiveLine data={bmichartData}/>
        </div>
    </div>
    </div>
    
   </>
    );
};

export default Observations;
