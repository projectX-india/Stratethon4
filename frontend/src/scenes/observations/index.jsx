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
<<<<<<< HEAD
  
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
=======


>>>>>>> 1b2dd350c7ac2436ee130e383970ed3f2727453b


const Observations = ({patientData}) => {

  const [rows,setRows] = useState([])
  const [chartData,setChartData] = useState([])

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

<<<<<<< HEAD
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
      let dbp = formatChartData("Diastolic Blood Pressure",obj["Diastolic Blood Pressure"]);
      console.log(dbp);
      setChartData(chartData=>[...chartData,dbp])
      console.log(chartData);
    }
    setChartData([]);
    fillChart();

}, [patientData])

  
=======

>>>>>>> 1b2dd350c7ac2436ee130e383970ed3f2727453b

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
    <div className="container w-50 p-1">
      <MyResponsiveLine data={chartData}/>
    </div>
   </>
    );
};

export default Observations;
