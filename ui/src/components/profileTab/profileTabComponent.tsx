import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ChatComponent from "../../components/chat/chatComponent";
import Grid from '@material-ui/core/Grid';
import CreatePost from "../../components/createPost/createPostComponent";
import { StickyContainer, Sticky } from 'react-sticky';
import Media from "../../components/media/mediaComponent";
import About from "../../components/about/aboutComponent";
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '90%',

   background:'#fff !important'
  },
}));

export default function ProfileTabComponent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const main = (
    <Grid    style={{ paddingTop: '24px !important', display: 'flex', justifyContent: 'center' }}  >
         <Grid item xs={12} sm={12} md={9} lg={9} className='profileInfo' >
         <CreatePost />
         <ChatComponent />
     </Grid>

     <Grid item xs={12} sm={12} md={3} lg={6} className='userInfo' >

     <StickyContainer style={{
                            position: 'sticky', top: '0'

                        }}>
                            <Sticky>
                                {({
                                    style,
                                    isSticky,
                                    wasSticky,
                                    distanceFromTop,
                                    distanceFromBottom,
                                    calculatedHeight
                                }) => (
                                    <header style={style}>
                                        <About />
                                        <Media />
                                    </header>
                                )}
                            </Sticky>

                        </StickyContainer>
 
     </Grid>

     </Grid>
);
  return (
    <div style={{display:'flex',justifyContent:'center',marginTop:'-35px'}}   >

<Grid container  className={classes.root}  style={{maxWidth: '1252px'}}>     
  <div className={classes.root} style={{width: '90%'}}>
      <AppBar position="static" color="default" style={{background:'#fff',marginTop: '-30px'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="standard"
          scrollButtons="auto"
        
   
        >
          <Tab label="About" {...a11yProps(0)} />
          <Tab label="Discussion" {...a11yProps(1)} />
          <Tab label="Members" {...a11yProps(2)} />
          <Tab label="Events" {...a11yProps(3)} />
          <Tab label="Media" {...a11yProps(4)} />
          <Button style={{height:'34px',marginRight:'10px',width:' 54px',position: 'absolute',right:'0px' ,top:'-1px' }}
                              variant="contained"
                              color="default"
                              startIcon={<SearchIcon />}
                          >
                          
          </Button>
          <Button style={{height:'34px',marginRight:'10px',width:' 54px',position: 'absolute',right:'64px' ,top:'18px'  }}

          
                        variant="contained"
                        color="default"
                        startIcon={<MoreHorizIcon />}
                    >
                     
     </Button>
        </Tabs>

       
 <TabPanel value={value} index={0}>{main}</TabPanel>
      </AppBar>
   
 
   
     </div> 
     <div>
  
     </div>
     </Grid>
    </div>

  );
}