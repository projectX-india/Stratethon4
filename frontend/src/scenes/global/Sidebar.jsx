import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import VaccinesIcon from '@mui/icons-material/Vaccines';
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MedicationIcon from '@mui/icons-material/Medication';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = ({patientData}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      style={{
        position:'sticky',
        position:'-webkit-sticky;'
      }}
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
        position:'sticky',
        position:'-webkit-sticky;'
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h1" color={colors.grey[100]} fontWeight="bold">
                  UPCARE
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          <br/>

          {!isCollapsed && (
            <Box mb="25px">
              
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  sx={{ m: "10px 0 0 0" }}
                >
                 {patientData.first} {patientData.last}
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Profile"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Conditions"
              to="/conditions"
              icon={<ContentPasteIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Observations"
              to="/observations"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Vaccines"
              to="/immunisations"
              icon={<VaccinesIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Medications"
              to="/medications"
              icon={<MedicationIcon />}
              selected={selected}
              setSelected={setSelected}
            />

           
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
            Assesments
            </Typography>
            <Item
              title="Allergies"
              to="/allergies"
              icon={<CoronavirusIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Self Assesments"
              to="/selfassesments"
              icon={<SelfImprovementIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
