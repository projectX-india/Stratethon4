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

import {  useTheme } from "@mui/material";
import {tokens} from "../../theme"

const Allergies = ({patientData}) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [existingAllergies, setexistingAllergies] = useState([]);
    const [allergySurveyQuestions, setallergySyrveyQuestions] = useState([
        {
            'answer':false,
            'description':'mold',
            'reactionQuestion':'Do you think you have running nose?'
        },
        {
            'answer':false,
            'description':'Tree',
            'reactionQuestion':'Do think you have wheal?'
        },
        {
            'answer':false,
            'description':'Fish',
            'reactionQuestion':'Do think you have Diarhea?'
        }
    ]);

    const updateFieldChanged = (name, index) => (event) => {
        let newArr = allergySurveyQuestions.map((item, i) => {
          if (index == i) {
            return { ...item, [name]: event };
          } else {
            return item;
          }
        });
        setallergySyrveyQuestions(newArr);
    };

    useEffect(() => {
      const insertAllergies = () =>{
        setexistingAllergies([]);
        if(patientData && patientData.allergies){
            for(let i=0;i<patientData.allergies.length;i++){
                let item = patientData.allergies[i];
                setexistingAllergies(existingAllergies => [...existingAllergies,item])
            }
        }
      }
      insertAllergies();
    }, [patientData])
    

    return (
    <>
        <div style={{'width':'90%','display':'flex','flexDirection':'row'}}>
            <div className="container w-50 h-50  m-4">
                <Box sx={{ width: '100%'}}>
                    <nav aria-label="main mailbox folders" style={{backgroundColor: colors.primary[400]}}>
                        <List subheader={
                            <ListSubheader component="div" id="nested-list-subheader" style={{backgroundColor: colors.primary[400]}}>
                                Allergic to
                            </ListSubheader>
                        }>
                            {
                                existingAllergies.map(function(object, i){
                                    return (
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <DangerousIcon/>
                                                </ListItemIcon>
                                                <ListItemText primary={`${object.description} (${object.category})`} />
                                            </ListItemButton>
                                        </ListItem>
                                    )  
                                })
                            }
                        </List>
                    </nav>
                    <Divider />
                </Box>
            </div>
            <div className="container w-50 h-50  m-4">
                <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <nav aria-label="main mailbox folders"  style={{backgroundColor: colors.primary[400]}}>
                        <List subheader={
                            <ListSubheader component="div" id="nested-list-subheader"  style={{backgroundColor: colors.primary[400]}}>
                                You might be at risk of following allergies:
                            </ListSubheader>
                        }>
                            {
                                existingAllergies.map(function(object, i){
                                    return (
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <DangerousIcon/>
                                                </ListItemIcon>
                                                <ListItemText primary={`${object.description} (${object.category})`} />
                                            </ListItemButton>
                                        </ListItem>
                                    )
                                })
                            }
                        </List>
                    </nav>
                    <Divider />
                </Box>
            </div>
        </div>
        <div style={{'width':'90%','display':'flex','flexDirection':'row'}}>
            <div className="container w-100 h-50  m-4">
            <Box sx={{ width: '100%', bgcolor: 'background.paper',padding:'1em' }}  style={{backgroundColor: colors.primary[400]}}>
                <h3 className="p-3">Self Assessment</h3>
                {
                    allergySurveyQuestions.map((object,i) => {
                        return (
                            <>
                                <BooleanQuestion
                                    style={{
                                        bgcolor:'background.paper',
                                        color:'white'
                                    }}
                                    onChangeAnswer={updateFieldChanged("answer",i)}
                                    question={{
                                        name: "boolean-example",
                                        title: object.reactionQuestion,
                                        type: "boolean"
                                    }}
                                />
                                {
                                    (object.answer)?
                                        (<Alert 
                                            sx={{ width: '70%', bgcolor: 'background.paper' ,}}
                                            severity="warning">
                                            You might be at risk of {`${object.description}`} Allergy!
                                        </Alert>):''
                                }
                            </>
                        )
                    })
                }

                {/* <BooleanQuestion
                    style={{
                        bgcolor:'background.paper',
                        color:'white'
                    }}
                    onChangeAnswer={updateFieldChanged("answer",0)}
                    question={{
                        name: "boolean-example",
                        title: "Do you think you have Running Nose?",
                        type: "boolean"
                    }}
                />
                {
                    (allergySurveyQuestions[0].answer)?
                    (<Alert 
                        sx={{ width: '70%', bgcolor: 'background.paper' }}
                        severity="warning">
                            You might be at risk of Mold Allergy!
                    </Alert>)
                    :''
                } */}
                

            </Box>
                
            </div>
        </div>
        
        
        
    </>
    )
}

export default Allergies