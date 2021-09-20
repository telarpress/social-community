import React, { Component, useState } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';

import { inHomeComponentProps } from './inHomeComponentProps'
import { inHomeComponentState } from './inHomeComponentState'
import HomeHeader from "../../components/homeHeader/homeHeader";
import ChatComponent from "../../components/chat/chatComponent";
import CreatePost from "../../components/createPost/createPostComponent";
import Cover from "../../components/cover/coverComponent";
import { homeStyle } from './homeStyle'
import { StickyContainer, Sticky } from 'react-sticky';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PublicIcon from '@material-ui/icons/Public';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Media from "../../components/media/mediaComponent";
import About from "../../components/about/aboutComponent";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ProfileTabComponent from '../../components/profileTab/profileTabComponent'
import ProfileInfoComponent from '../../components/profileInfo/profileInfoComponent'
class homeComponent extends Component<inHomeComponentProps, inHomeComponentState>  {
    constructor(props: inHomeComponentProps) {
        super(props)
        this.state = {
            menuId: 'primary-search-account-menu',
            mobileMenuId: 'primary-search-account-menu-mobile',
            isMenuOpen: false,
            drawerOpen: false
        }

    }
    handleDrawerOpen = () => {
        this.setState({ drawerOpen: !this.state.drawerOpen })
    };
    handleDrawerClose = () => {
        this.setState({ drawerOpen: this.state.drawerOpen })
    };
    handleDrawerToggle = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen })
    }
    render() {
        const { classes, theme, posts } = this.props
        const renderMenu = (
            <Menu
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id={this.state.menuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={this.state.isMenuOpen}
                onClose={this.handleDrawerToggle}
            >
                <MenuItem  >Profile</MenuItem>
            </Menu>
        );
     
        const cover = (
            <main className={classes.content}>
                <Cover />
                <ProfileInfoComponent />
        
            </main>
        );
        return (
            <div className={classes.root}>
                <HomeHeader onToggleDrawer={this.handleDrawerOpen} />
                <Grid container style={{ paddingTop: '17px !important' }} spacing={3}>
                    <Grid item xs={12} sm={12} lg={12} style={{ background: '#fff', marginTop: '-45' }}>
                        {cover}
      
                    </Grid>

                </Grid>
                <Grid container style={{ paddingTop: '24px !important', display: 'flex', justifyContent: 'center' }} spacing={3}>
                <Grid item xs={12} sm={12} md={12} lg={12} className='profileInfo' >
               
                <ProfileTabComponent  />
                
 </Grid>
                </Grid>
            </div>

        )

    }

}

export default withStyles(homeStyle as any)(homeComponent)