import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useState, useEffect } from "react";
  
function createData(number, item, qty, price) {
 return { number, item, qty, price};
}
  



const Observations = ({patientData}) => {
  
  const [rows,setRows] = useState([])

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
      fillRows()
  }, [patientData])
  
  

  return (
    <>
      <h3 className="p-3">Observations</h3>
      <div className="container p-4">
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
   </>
    );
};

export default Observations;
