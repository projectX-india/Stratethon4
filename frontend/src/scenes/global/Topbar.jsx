import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = ({patientId,setpatientId,handleClick}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" justifyContent="space-between" p={3}>
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="4px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} onChange={(e)=>{setpatientId(e.target.value)}} placeholder="Enter Patient Id" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon onClick={async () => await handleClick()} />
        </IconButton>
      </Box>

      <Box display="flex" >
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
      </Box>
    </Box>
    )
}

export default Topbar