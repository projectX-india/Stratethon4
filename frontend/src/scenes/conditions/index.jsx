import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useEffect } from "react";
  
function createData(number, item, qty, price,desc) {
 return { number, item, qty, price,desc };
}
  



const Conditions = ({patientData}) => {

 
  const [rows,setRows] = useState([])
  
  useEffect(() => {
      const fillRows = ()=>{
        let data = patientData.conditions;
        for(let i=0;i<data.length;i++){
          if(data[i]){
            var start = new Date(data[i].start);
            var stop = new Date(data[i].stop);
            setRows(rows=>[...rows,createData( start.toDateString(), stop.toDateString(),data[i].encounterid,data[i].description)]);
          }
        }
      }
      setRows([]);
      fillRows();
  }, [patientData])
  
  

  return (
    <>
      <h3 className="p-3">Conditions</h3>
      <div className="container p-4">
        <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Start</TableCell>
              <TableCell align="right">Stop</TableCell>
              <TableCell align="right">Encounter Id</TableCell>
              <TableCell align="right">Description</TableCell>
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

export default Conditions;
