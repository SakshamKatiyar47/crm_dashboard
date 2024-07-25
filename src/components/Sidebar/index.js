// import React, { useContext, useEffect } from 'react'
// import Button from '@mui/material/Button';
// import { MdSpaceDashboard } from "react-icons/md";
// import { FaHandshake } from "react-icons/fa";
// import { MdContacts } from "react-icons/md";
// import { Link } from 'react-router-dom';
// import { IoLogOut } from "react-icons/io5";
// import { MyContext } from '../../App';
// import { BsFileBarGraphFill } from "react-icons/bs";
// import { BiSolidWallet } from "react-icons/bi";

// const Sidebar = ({ isTogglesSidebar }) => {
//     const context = useContext(MyContext);
    
//     return (
//         <>
//             {isTogglesSidebar && <div className="sidebar">
//                 <ul>
//                     <Link to="/">
//                         <li>
//                             <Button className='w-100' ><span className='icon'><MdSpaceDashboard /></span> Dashboard </Button>
//                         </li>
//                     </Link>
//                     <Link to="/Deals">
//                         <li>
//                             <Button className='w-100' ><span className='icon'><FaHandshake /></span> Deals </Button>
//                         </li>
//                     </Link>
//                     <Link to="/Contacts">
//                         <li>
//                             <Button className='w-100' ><span className='icon'><MdContacts /></span> Contacts </Button>
//                         </li>
//                     </Link>
//                     <Link to="/">
//                         <li>
//                             <Button className='w-100' ><span className='icon'><BsFileBarGraphFill /></span> Sales </Button>
//                         </li>
//                     </Link>
//                     <Link to="/">
//                         <li>
//                             <Button className='w-100' ><span className='icon'><BiSolidWallet /></span> Revenue </Button>
//                         </li>
//                     </Link>
//                 </ul>

//                 <div className="logout">
//                     <div className="logout-box">
//                         <Button variant="contained">Logout <IoLogOut /></Button>
//                     </div>
//                 </div>

//             </div>}
//         </>
//     )
// }

// export default Sidebar;

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Dashboard from '../../pages/Dashboard';
import { MdSpaceDashboard } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoLogOut } from "react-icons/io5";
import { MyContext } from '../../App';
import { BsFileBarGraphFill } from "react-icons/bs";
import { BiSolidWallet } from "react-icons/bi";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ContactsIcon from '@mui/icons-material/Contacts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Dashboard', 'Deals', 'Contacts', 'Sales', 'Revenue',].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <DashboardIcon/>  : <ContactsIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
      
        <Typography variant="h5" noWrap component="div">
            CRM Dashboard
          </Typography>
          <AccountCircleIcon 
          sx={{  }}/>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 30, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Dashboard/>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
