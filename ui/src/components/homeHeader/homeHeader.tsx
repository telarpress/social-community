import React ,{Component,useState} from "react";
import {HomeHeaderProps} from "./homeHeaderProps";
import {HomeHeaderState} from "./homeHeaderState";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import TextLogo from "../../layouts/textLogo";
import MenuList from "@material-ui/core/MenuList";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import {inHomeComponentProps} from "../../containers/home/inHomeComponentProps";
import {homeHeaderStyle} from "./homeHeaderStyle";
import {withStyles} from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import SearchBox from "../searchBox/searchBoxComponent";

class HomeHeader extends Component<HomeHeaderProps,HomeHeaderState>{
    constructor(props:HomeHeaderProps) {
        super(props)
        this.state = {
            menuId:'primary-search-account-menu',
            mobileMenuId : 'primary-search-account-menu-mobile',
            isMenuOpen:false,
            drawerOpen:false,
            anchorEl: null,
        }
    }
    handleDrawerToggle = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen })
    }
    onToggleSidebar = () => {
        const { onToggleDrawer } = this.props
        onToggleDrawer()
    }
    handleDrawerOpen = () => {
        this.setState({ drawerOpen: !this.state.drawerOpen })
    };

    handleAccountOpen = event => {

        this.setState({ anchorEl: event.currentTarget });

    }
    handleClose = (message) => () => {
        this.setState({ anchorEl: null });
        console.log(message);
    };
    handleDrawerClose = () => {
        this.setState({ drawerOpen: this.state.drawerOpen })
    };
            render(){
                const {classes, theme} = this.props
                const { anchorEl } = this.state;

                const popoverAccount = (

                    <Popover
                        anchorEl={anchorEl}
                        id="fade-menu"
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose(null)}
                        style={{left:-50, top:50 }}
                        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                        transformOrigin={{
                            vertical: 'center',
                            horizontal: 'center',
                        }}

                    >

                        <Box p={1} style={{cursor:"pointer"}}>
                            <Typography>Edit</Typography>
                        </Box>
                        <Box p={1}   style={{cursor:"pointer"}}>
                            <Typography>Delete</Typography>
                        </Box>
                        <Box p={1} style={{cursor:"pointer"}}>
                            <Typography>Disable Comments</Typography>
                        </Box>
                        <Box p={1} style={{cursor:"pointer"}}>
                            <Typography>Disable Sharing</Typography>
                        </Box>

                    </Popover>

                )
                return (

                    <div>

                        <AppBar position="static" className={classes.header}  >
                            <Toolbar>
                                {/*<IconButton*/}
                                {/*    edge="start"*/}
                                {/*    className=''*/}
                                {/*    onClick={()=>this.onToggleSidebar()}*/}
                                {/*    color="inherit"*/}
                                {/*    aria-label="open drawer"*/}
                                {/*>*/}
                                {/*    <MenuIcon />*/}
                                {/*</IconButton>*/}
                                <div className={classes.drawerHeader} >
                                    <TextLogo viewBox='0 00 100 60' className={classes.logo}/>
                                </div>
                                <MenuList style={{ color: 'rgb(117, 117, 117)', width: '113px', paddingTop: '0px' }}>
                                    <div className={classes.homeTitle}>

                                        Home
                                    </div>

                                </MenuList>
                               <SearchBox/>
                                <div className={classes.grow} />
                                <div className={classes.sectionDesktop}  style={{marginRight:56}}>

                                    <IconButton aria-label="show 17 new notifications" color="inherit" style={{marginRight:36}}>
                                        <Badge badgeContent={17} color="secondary">
                                            <NotificationsIcon />
                                        </Badge>
                                    </IconButton>
                                    <IconButton
                                        edge="end"
                                        aria-label="account of current user"
                                        aria-controls={this.state.menuId}
                                        aria-haspopup="true"
                                        onClick={this.handleAccountOpen}
                                        color="inherit"
                                    >
                                        <AccountCircle />
                                    </IconButton>


                                    {popoverAccount}

                                </div>
                                <div className={classes.sectionMobile}>
                                    <IconButton
                                        aria-label="show more"

                                        aria-haspopup="true"

                                        color="inherit"
                                    >
                                        <MoreIcon />
                                    </IconButton>
                                </div>
                            </Toolbar>
                        </AppBar>

                    </div>
                )

            }

}
export default withStyles(homeHeaderStyle as any)(HomeHeader);
