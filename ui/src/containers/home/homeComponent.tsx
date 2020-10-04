import React ,{Component,useState} from "react";
import Head from "next/head";
import Button from '@material-ui/core/Button';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Drawer from '@material-ui/core/Drawer';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Divider from '@material-ui/core/Divider';
import Faker from 'faker'
import MenuList from '@material-ui/core/MenuList';
import ListItem from '@material-ui/core/ListItem';
import MailIcon from '@material-ui/icons/Mail';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import {inHomeComponentProps} from './inHomeComponentProps'
import {inHomeComponentState} from './inHomeComponentState'
import HomeHeader from "../../components/homeHeader/homeHeader";
import ChatComponent from "../../components/chat/chatComponent";
import {homeStyle} from './homeStyle'
import Avatar from "@material-ui/core/Avatar";
import TextLogo from "../../layouts/textLogo";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

class homeComponent extends Component<inHomeComponentProps, inHomeComponentState>  {
    constructor(props:inHomeComponentProps) {
        super(props)
        this.state = {
            menuId: 'primary-search-account-menu',
            mobileMenuId: 'primary-search-account-menu-mobile',
            isMenuOpen: false,
            drawerOpen: false
        }
        console.log(props);
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
        const {classes, theme,posts} = this.props
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
        const userInfo = (
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={
                        "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
                    }
                >
                    <Avatar
                        className={classes.userImage}
                        src={
                            Faker.internet.avatar()
                        }
                    />
                </CardMedia>

                <CardContent className={classes.context}>
                    <Typography
                        className={classes.typographyHeading}
                        variant={"h6"}
                        gutterBottom
                    >
                        {Faker.internet.userName()}
                    </Typography>

                    <Typography
                        className={classes.Followers}
                        variant={"caption"}
                    >
                        Followers

                        <p>{Faker.random.number()}</p>

                    </Typography>

                    <Typography
                        className={classes.Following}
                        variant={"caption"}
                        align={'center'}
                    >
                        Following

                        <p>{Faker.random.number()}</p>
                    </Typography>

                    <Divider light className={classes.divider} />

                    <Link href="/"  className={classes.linkProfile}>view Profile</Link>
                </CardContent>
            </Card>

        );

        const peopleList = (

            <Card className={classes.card}>

                <Typography
                    className={classes.peopleHeader}
                    variant={"h6"}
                >
                    Peoples
                    <Divider light className={classes.divider} />


                </Typography>
                <List className={classes.rootPeople}>

                    {
                        this.props.users.map(function(item,i){

                      return (
                              <div key={i}>
                                  <ListItem alignItems="flex-start">
                                      <ListItemAvatar>
                                          <Avatar alt="Remy Sharp" src={Faker.internet.avatar()} />
                                      </ListItemAvatar>
                                      <ListItemText
                                          secondary={
                                              <React.Fragment>
                                                  <Typography
                                                      component="span"
                                                      variant="body2"
                                                      className={classes.peopleUserName}
                                                      color="textPrimary"
                                                  >
                                                      {item.username}
                                                  </Typography>

                                              </React.Fragment>
                                          }
                                      />
                                  </ListItem>
                                  <Divider variant="inset" className={classes.divider} component="li" />


                              </div>

                          )


                        })
                    }

                </List>
            </Card>

        );
        const drawer =(

            <Drawer
                classes={{
                    paper: classes.drawerPaperLarge,
                }}
                variant="persistent"
                anchor="left"
                open={this.state.drawerOpen}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={()=>this.handleDrawerClose()}>
                        {/*{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}*/}
                    </IconButton>
                </div>

                <List>
                    {['Home', 'Profile', 'People'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>

            </Drawer>

        );

        const main = (
            <main   className={classes.content}>
                <ChatComponent   />
            </main>
        );
        return (
            <div className={classes.root}>
                <HomeHeader onToggleDrawer={this.handleDrawerOpen}/>
                <Grid container   style={{paddingTop:'60px !important'}}>

                    <Grid item xs={12} sm={12} lg={3} className='userInfo' >
                        {userInfo}
                        {peopleList}
                    </Grid>
                    <Grid item xs={12} sm={12} lg={7}>
                        {main}

                    </Grid>

                </Grid>
            </div>

        )

    }

}

export default withStyles(homeStyle as any)(homeComponent)