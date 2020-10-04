import React ,{Component,useState} from "react";
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Menu from '@material-ui/core/Menu';

import VideoCallIcon from '@material-ui/icons/VideoCall';
import CollectionsIcon from "@material-ui/icons/Collections";
import InputAdornment from '@material-ui/core/InputAdornment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import BackIcon from '@material-ui/icons/ArrowBack';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import EmojiIcon from '@material-ui/icons/SentimentSatisfied';
import classNames from 'classnames';
import Box from '@material-ui/core/Box';
import clsx from 'clsx';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CardMedia from '@material-ui/core/CardMedia';
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";

import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';

import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import {ChatProps} from './chatProps';
import Faker from 'faker';
import {ChatState} from './chatState';
import Card from "@material-ui/core/Card";
import  {chatStyles} from './chatStyles'
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import {HomeHeaderProps} from "../homeHeader/homeHeaderProps";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import MenuList from "@material-ui/core/MenuList";
import Toolbar from "@material-ui/core/Toolbar"
import { GetServerSideProps } from 'next'
import CreatePost from "../createPost/createPostComponent";
import { NextPageContext } from 'next'

class ChatComponent extends Component<ChatProps,ChatState>{

    constructor(props) {
        super(props)
        this.state = {
            expanded: null,
            activeIndex: null,
            openDialog: false,
            mainState: "initial", // initial, search, gallery, uploaded
            imageUploaded: 0,
            selectedFile: null,
            openVideoDialog: false,
            openMorePostDialog: false,
            openMorePost: false,
            anchorEl: null,
        }




    }

    handleToggleMorePost = () => {

        this.setState({ openMorePostDialog:! this.state.openMorePostDialog })
    }
    handleTogglePost = event => {
        this.setState({ anchorEl: event.currentTarget });
    }

    handleClickOpen = () => {
        this.setState({ openDialog: !this.state.openDialog })
    }
    handleExpandClick = (index , e) => {
        this.setState({ expanded:  this.state.expanded === index ? null :index})
    }
    handleUploadClick = (e) => {


    }
    handleClose = (message) => () => {
        this.setState({ anchorEl: null });
        console.log(message);
    };
    handleGalleryClick = event => {
        this.setState({
            mainState: "gallery"
        });
    };
    render(){
        let content;
         const {classes, theme  } = this.props;
        const { anchorEl } = this.state;

        const posts = [
            {
                id:"1",
                avatar: Faker.internet.avatar(),
                userName : Faker.internet.userName()

            },
            {
                id:"2",
                avatar: Faker.internet.avatar(),
                userName : Faker.internet.userName()
            },
            {
                id:"3",
                avatar: Faker.internet.avatar(),
                userName : Faker.internet.userName()
            }

        ];




        const mainChat = (

            content = posts.map((post,index) => {
                return (
                        <div key={index}>
                            <Card className={classes.postContent} key={index} >
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe"
                                                src={
                                                    post.avatar
                                                }

                                                className={classes.avatar}>
                                            R
                                        </Avatar>
                                    }
                                    action={
                                        <IconButton aria-label="settings" onClick={this.handleTogglePost}>
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    title={post.userName}
                                    subheader="September 14, 2016"
                                />
                                <Popover
                                    id="fade-menu"
                                    open={Boolean(anchorEl)}
                                    onClose={this.handleClose(null)}
                                    anchorEl={anchorEl}
                                    style={{top:100}}
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                                    transformOrigin={{
                                        vertical: 'center',
                                        horizontal: 'center',
                                    }}
                                    getContentAnchorEl={null}
                                >

                                    <Box p={1} style={{cursor:"pointer"}}>
                                        <Typography>Edit</Typography>
                                    </Box>
                                    <Box p={1} style={{cursor:"pointer"}}>
                                        <Typography>Delete</Typography>
                                    </Box>
                                    <Box p={1} style={{cursor:"pointer"}}>
                                        <Typography>Disable Comments</Typography>
                                    </Box>
                                    <Box p={1} style={{cursor:"pointer"}}>
                                        <Typography>Disable Sharing</Typography>
                                    </Box>

                                </Popover>
                                <CardMedia
                                    className={classes.media}
                                    image={Faker.image.imageUrl()}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">

                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                    <IconButton
                                        className={clsx(classes.expand, {
                                            [classes.expandOpen]: this.state.expanded,
                                        })}
                                        onClick={this.handleExpandClick.bind(this, index)}
                                        aria-expanded={this.state.expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </IconButton>
                                </CardActions>
                                <Collapse in={this.state.expanded === index} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <FormControl fullWidth className={classes.margin} variant="outlined">
                                            <InputLabel  >Add Comment</InputLabel>
                                            <Input
                                                id="standard-adornment-weight"
                                                aria-describedby="standard-weight-helper-text"
                                                inputProps={{
                                                    'aria-label': 'weight',
                                                }}
                                            />

                                        </FormControl>
                                        <Button variant="outlined" style={{float:'right',marginTop: '16px',
                                            marginBottom:'16px'}}>Post</Button>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </div>
                    )
                }
            ))
        return(
            <div>
                <CreatePost />
                {mainChat}
            </div>
        )

    }

}
export async function getServerSideProps() {
    let post={id:5}
    return {
        props : {
            post
        }
    }

}
// @ts-ignore

export default withStyles(chatStyles as any)(ChatComponent)

