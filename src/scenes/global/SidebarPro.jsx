import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeModeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleModeOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsModeOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptModeOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonModeOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HelpModeOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartModeOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartModeOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import TimelineModeOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MaplineModeOutlinedIcon from '@mui/icons-material/MapOutlined';

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    return (
        <MenuItem active={selected === title}
            style={{ color: colors.grey[100] }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    )
}


const SidebarPro = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box sx={{
            "& .pro-sidebar-inner": {
                background: `${colors.primary[400]} !important`
            },
            "& .pro-icon-wrapper": {
                backgroundColor: "transparent !important"
            },
            "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !important"
            },
            "& .pro-menu-item.active": {
                color: "#6870fa !important"
            }
        }}>
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100]
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h3" color={colors.grey[100]}>
                                    ADMINIS
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>



                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src={`../../assets/user.png`}
                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    Ed Roh
                                </Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}>
                                    VP Fancy Admin
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    <Box paddingLeft={isCollapsed ? undefined : '10%'}>
                        <Item title="Dashboard"
                            to="/"
                            icon={<HomeModeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        ></Item>
                        <Typography variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Data
                        </Typography>
                        <Item title="Manage Team"
                            to="/team"
                            icon={<PeopleModeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        ></Item>
                        <Item title="Contacts Information"
                            to="/contacts"
                            icon={<ContactsModeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        ></Item>

                        <Item title="Invoices Balances"
                            to="/invoices"
                            icon={<ReceiptModeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        ></Item>
                        <Typography variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Pages
                        </Typography>
                        <Item title="Profile Form"
                            to="/form"
                            icon={<PersonModeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        ></Item>
                        <Item title="Calendar"
                            to="/calendar"
                            icon={<CalendarTodayIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        ></Item>
                        <Item title="FAQ Page"
                            to="/faq"
                            icon={<HelpModeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        ></Item>
                        <Typography variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Charts
                        </Typography>
                        <Item title="Bar Chart"
                            to="/bar"
                            icon={<BarChartModeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        ></Item>
                        <Item title="Pie Chart"
                            to="/pie"
                            icon={<PieChartModeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        ></Item>
                        <Item title="Line Chart"
                            to="/line"
                            icon={<TimelineModeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        ></Item>
                        <Item title="Geography Chart"
                            to="/geography"
                            icon={<MaplineModeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        ></Item>

                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    )
}

export default SidebarPro;