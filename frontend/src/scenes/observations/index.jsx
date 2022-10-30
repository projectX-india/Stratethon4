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
      
      // console.log(chartData);
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
      <h3 className="p-3">Observations</h3>
      <div className="container p-4" style={{
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
    </div>
    
    <div className="container w-100 h-100  m-4">
        <div className="container w-50 h-50 m-2 p-1 bg-light text-dark">
          <MyResponsiveLine data={bpchartData}/>
        </div>
        <div className="container w-50 h-50 m-2 p-1 bg-light text-dark">
          <MyResponsiveLine data={heightchartData}/>
        </div>
      </div>
    <div className="container w-100 h-100  m-4">
        <div className="container w-50 h-50 m-2 p-1 bg-light text-dark">
          <MyResponsiveLine data={weightchartData}/>
        </div>
        <div className="container w-50 h-50 m-2 p-1 bg-light text-dark">
          <MyResponsiveLine data={bmichartData}/>
        </div>
    </div>
   </>
    );
};

export default Observations;
