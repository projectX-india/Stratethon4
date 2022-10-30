import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Conditions from "./scenes/conditions";
import Immunisations from "./scenes/immunisations";
import Medications from "./scenes/medications";
import Observations from "./scenes/observations";
import Allergies from "./scenes/allergies";
import axios from "./axios.js"
import { sampleData } from "./data/sampleData";
import { useState } from "react";

function App() {
  const [theme, colorMode] = useMode();
  const [patientId,setpatientId]=useState("");
  const [patientData,setpatientData]=useState(sampleData);

  const handleClick = async () => {
    await axios.get(`/patient/${patientId}`)
      .then((response) => {
          setpatientData(response.data);
      }).catch((error) => {
        console.log(error)
      })
  };

  return (
    <>
    <ColorModeContext.Provider value={colorMode}>
       <ThemeProvider theme={theme}>
         <CssBaseline />
        <div className="app" >
            <Sidebar patientData={patientData} />
          <main className="content">
            <Topbar patientId={patientId} setpatientId={setpatientId} handleClick={handleClick}/>
            <Routes>
                <Route path="/" element={<Dashboard patientData={patientData} />} />
                <Route path="/observations" element={<Observations patientData={patientData} />} />
                <Route path="/immunisations" element={<Immunisations patientData={patientData} />} />
                <Route path="/conditions"  element={<Conditions  patientData={patientData} />} />
                <Route path="/medications" element={<Medications patientData={patientData} />} />
                <Route path="/allergies" element={<Allergies patientData={patientData} />} />
            </Routes>
          </main>
        </div>
       </ThemeProvider>
     </ColorModeContext.Provider>
    </>
    
  )
}

export default App