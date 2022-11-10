import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import './App.css';
import cardDetails from './cardDetails';
// import MiComponent from "./miComponent";
import CardComponent from "./cardComponent"
import { Grid } from '@mui/material';

const drawerWidth = 240;
const navItems = ['Home', "Food", "Health", 'About', 'Contact'];

function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        component="div"
        sx={{ my: 2, fontSize: "18px", fontWeight: 600, letterSpacing: "1.5px", color: "green" }}
      >
        <span style={{ fontSize: "18px", color: "orange" }}>F</span>ood <div style={{ transform: "rotate(-25deg)", margin: "0px 3px" }}><span className='logoAnd' data-char="&">&</span></div> <span style={{ fontSize: "18px", color: "orange" }}>H</span>ealth
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex' }, fontSize: "18px", fontWeight: 600, letterSpacing: "1.5px", color: "green" }}
          >
            <span style={{ fontSize: "18px", color: "orange" }}>F</span>ood <div style={{ transform: "rotate(-25deg)", margin: "0px 3px" }}><span className='logoAnd' data-char="&">&</span></div> <span style={{ fontSize: "18px", color: "orange" }}>H</span>ealth
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#767676' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
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
      </Box>
      <Box component="main" className="dashboardContainer" sx={{ width: "100%" }}>
        <Toolbar style={{ position: "absolute" }} />
        {/* <Box className="miStyle" sx={{display:"flex",justifyContent:"center",width:"100vw",height:"30vh"}} >
        <MiComponent></MiComponent>
        </Box>
          <Grid item xs={12} md={6} lg={4}>
          <CardComponent></CardComponent>
          </Grid> */}
        <Grid className='cardContainer' style={{ minWidth: "100%" }} container >

          {cardDetails.map((val, idx) =>
            <Grid item className='cardItem' >
              <CardComponent id={idx} img={val.img} heading={val.heading} subHeading={val.subHeading}></CardComponent>
            </Grid>)}

        </Grid>
      </Box>
    </Box>
  );
}

export default App;
