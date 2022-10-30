import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import {  useTheme } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {tokens} from "../theme"

export default function BasicCard({title,desc}) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  return (
    <div className='container m-2 p-2'>
        <Card sx={{ minWidth: 275  } } style={{backgroundColor: colors.primary[400]}}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color={colors.grey[200]} gutterBottom>
            {title}
            </Typography>
            <Typography variant="h5" component="div">
            {desc}
            </Typography>
        </CardContent>
        </Card>
    </div>
  );
}
