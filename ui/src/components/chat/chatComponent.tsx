import React, { Component, useState } from "react";
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
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
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
import PublicIcon from '@material-ui/icons/Public';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Link from '@material-ui/core/Link';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { ChatProps } from './chatProps';
import Faker from 'faker';
import { ChatState } from './chatState';
import Card from "@material-ui/core/Card";
import { chatStyles } from './chatStyles'
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import { HomeHeaderProps } from "../homeHeader/homeHeaderProps";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import MenuList from "@material-ui/core/MenuList";
import Toolbar from "@material-ui/core/Toolbar"
import { GetServerSideProps } from 'next'
import CreatePost from "../createPost/createPostComponent";
import { NextPageContext } from 'next'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
class ChatComponent extends Component<ChatProps, ChatState>{

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

        this.setState({ openMorePostDialog: !this.state.openMorePostDialog })
    }
    handleTogglePost = event => {
        this.setState({ anchorEl: event.currentTarget });
    }

    handleClickOpen = () => {
        this.setState({ openDialog: !this.state.openDialog })
    }
    handleExpandClick = (index, e) => {
        this.setState({ expanded: this.state.expanded === index ? null : index })
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
    render() {
        let content;
        const { classes, theme } = this.props;
        const { anchorEl } = this.state;

        const posts = [
            {
                id: "1",
                avatar: Faker.internet.avatar(),
                userName: Faker.internet.userName()

            },
            {
                id: "2",
                avatar: Faker.internet.avatar(),
                userName: Faker.internet.userName()
            },
            {
                id: "3",
                avatar: Faker.internet.avatar(),
                userName: Faker.internet.userName()
            }

        ];




        const mainChat = (

            content = posts.map((post, index) => {
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
                                style={{ top: 100 }}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                                transformOrigin={{
                                    vertical: 'center',
                                    horizontal: 'center',
                                }}
                                getContentAnchorEl={null}
                            >

                                <Box p={1} style={{ cursor: "pointer" }}>
                                    <Typography>Edit</Typography>
                                </Box>
                                <Box p={1} style={{ cursor: "pointer" }}>
                                    <Typography>Delete</Typography>
                                </Box>
                                <Box p={1} style={{ cursor: "pointer" }}>
                                    <Typography>Disable Comments</Typography>
                                </Box>
                                <Box p={1} style={{ cursor: "pointer" }}>
                                    <Typography>Disable Sharing</Typography>
                                </Box>

                            </Popover>
                            <CardMedia
                                className={classes.media}
                                image={Faker.image.imageUrl()}
                                title="Paella dish"
                            />
                            <CardContent>

                                <div style={{ border: '1px solid #b3b3b3', marginTop: '-16px', padding: '14px', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px' }}>

                                    <Typography variant="body2" color="textSecondary" component="h2" style={{
                                        display: 'flex', fontWeight: 'bold',
                                        color: '#444'
                                    }}>
                                        Vacation For The Soul
                                    </Typography>
                                    <Link style={{ color: '#a8a8a8', display: ' flex', fontSize: ' .8125rem' }}>17 .<PublicIcon style={{ fontSize: '16px', marginLeft: '5px' }} /></Link>




                                    <Typography variant="body2" color="textSecondary" component="h3" style={{
                                        display: 'flex',
                                        color: '#444'
                                    }}>
                                        A breathtaking view of the Grand Canyon and the Colorado River from the southeast rim at sunset.
                                        Photo by @spencerwelling
                                    </Typography>
                                </div>
                                <Typography variant="body2" color="textSecondary" component="p" style={{ display: 'flex', marginTop: '15px' }}>
                                    <div style={{ width: '78%' }}>
                                        <IconButton style={{ padding: '0px' }}>
                                            <ThumbUpAltIcon style={{ fontSize: '18px', 'color': '#0678E7' }} />
                                        </IconButton>
                                        <IconButton style={{ padding: '0px' }}>
                                            <FavoriteIcon style={{ fontSize: '18px', color: '#ED5172' }} />
                                        </IconButton>
                                    </div>

                                    <div style={{ width: '200px', display: 'flex' }}>
                                        <Link onClick={this.handleTogglePost} style={{ cursor: 'pointer', color: '#7A7C7F' }}>
                                            740 Comments
                                        </Link>
                                        <Link onClick={this.handleTogglePost} style={{ cursor: 'pointer', marginLeft: '20px', color: '#7A7C7F' }}>
                                            42 Shares
                                        </Link>
                                    </div>


                                    <Popover
                                        id="fade-menu"
                                        open={Boolean(anchorEl)}
                                        onClose={this.handleClose(null)}
                                        anchorEl={anchorEl}
                                        style={{ top: 100 }}
                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                                        transformOrigin={{
                                            vertical: 'center',
                                            horizontal: 'center',
                                        }}
                                        getContentAnchorEl={null}
                                    >

                                        <Box p={1} style={{ cursor: "pointer" }}>
                                            <Typography>Edit</Typography>
                                        </Box>
                                        <Box p={1} style={{ cursor: "pointer" }}>
                                            <Typography>Delete</Typography>
                                        </Box>
                                        <Box p={1} style={{ cursor: "pointer" }}>
                                            <Typography>Disable Comments</Typography>
                                        </Box>
                                        <Box p={1} style={{ cursor: "pointer" }}>
                                            <Typography>Disable Sharing</Typography>
                                        </Box>

                                    </Popover>

                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing style={{
                                display: 'flex', justifyContent: 'center', borderTop: '1px solid #eee',
                                borderBottom: '1px solid #eee', padding: ' 0px'
                            }}>


                                <IconButton aria-label="add to favorites" style={{ width: '200px' }}>
                                    <ThumbUpAltOutlinedIcon />
                                    <Typography variant="body2" color="textSecondary" component="p" style={{
                                        fontWeight: 'bold',
                                        marginLeft: '10px'
                                    }}>Like</Typography>
                                </IconButton>
                                <IconButton aria-label="share" style={{ width: '200px' }}>

                                    <ChatBubbleOutlineOutlinedIcon />
                                    <Typography variant="body2" color="textSecondary" component="p" style={{
                                        fontWeight: 'bold',
                                        marginLeft: '10px'
                                    }}>Comment</Typography>
                                </IconButton>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: this.state.expanded,
                                    })}
                                    onClick={this.handleExpandClick.bind(this, index)}
                                    aria-expanded={this.state.expanded}
                                    style={{ width: '200px' }}
                                >
                                    <ShareIcon />
                                    <Typography variant="body2" color="textSecondary" component="p" style={{
                                        fontWeight: 'bold',
                                        marginLeft: '10px'
                                    }}>Share</Typography>
                                </IconButton>
                            </CardActions>

                            <CardContent>
                                <List className={classes.root}>
                                    <ListItem alignItems="flex-start">


                                        <ListItemAvatar style={{ minWidth: ' 45px' }}>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                        </ListItemAvatar>
                                        <ListItem style={{ display: 'grid', width: 'auto', paddingLeft: '0px', paddingRight: '0px' }}>

                                            <ListItemText style={{
                                                background: '#eee', flex: '0 1 auto', padding: '12px', fontSize: ' .8125rem',
                                                borderRadius: ' 24px'
                                            }}

                                                primary="Milad morovati"
                                                secondary={
                                                    <React.Fragment>
                                                        <Typography
                                                            component="span"
                                                            variant="body2"
                                                            className={classes.inline}
                                                            color="textPrimary"
                                                        >
                                                            {"I'll be in your neighborhood doing errands this… ll be in your neighborhood doing errands this…  ll be in your neighborhood doing errands this… ll be in your neighborhood doing errands this… ll be in your neighborhood doing errands this…"}

                                                        </Typography>

                                                    </React.Fragment>
                                                }

                                            />
                                            <IconButton style={{ position: 'absolute', bottom: '27px', right: '0', background: '#fff', padding: '0px', borderRadius: '34%', boxShadow: '0 1px 2px #9d9d9d' }}>
                                                <ThumbUpAltIcon style={{ fontSize: '18px', 'color': '#0678E7' }} />
                                                <Typography
                                                    style={{ marginLeft: '5px' }}
                                                    component="h6"
                                                    variant="body2"
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    2
                                                </Typography>
                                            </IconButton>


                                            <div >
                                                <Link onClick={this.handleTogglePost} style={{ cursor: 'pointer', color: '#7A7C7F', fontSize: '12px' }}>
                                                    Like
                                                </Link>
                                                <Link onClick={this.handleTogglePost} style={{ cursor: 'pointer', marginLeft: '8px', color: '#7A7C7F', fontSize: '12px' }}>
                                                    Share
                                                </Link>
                                                <Link onClick={this.handleTogglePost} style={{ cursor: 'pointer', marginLeft: '8px', color: '#7A7C7F', fontSize: '12px' }}>
                                                    1h
                                                </Link>

                                            </div>
                                        </ListItem>
                                    </ListItem>
 
                            
                                    <ListItem alignItems="flex-start">


<ListItemAvatar style={{ minWidth: ' 45px' }}>
    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
</ListItemAvatar>
<ListItem style={{ display: 'grid', width: 'auto', paddingLeft: '0px', paddingRight: '0px' }}>

    <ListItemText style={{
        background: '#eee', flex: '0 1 auto', padding: '12px', fontSize: ' .8125rem',
        borderRadius: ' 24px'
    }}

        primary="Milad morovati"
        secondary={
            <React.Fragment>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                >
                    {"I'll be in your"}

                </Typography>

            </React.Fragment>
        }

    />
    <IconButton style={{ position: 'absolute', bottom: '27px', right: '0', background: '#fff', padding: '0px', borderRadius: '34%', boxShadow: '0 1px 2px #9d9d9d' }}>
        <ThumbUpAltIcon style={{ fontSize: '18px', 'color': '#0678E7' }} />
        <Typography
            style={{ marginLeft: '5px' }}
            component="h6"
            variant="body2"
            className={classes.inline}
            color="textPrimary"
        >
            2
        </Typography>
    </IconButton>


    <div >
        <Link onClick={this.handleTogglePost} style={{ cursor: 'pointer', color: '#7A7C7F', fontSize: '12px' }}>
            Like
        </Link>
        <Link onClick={this.handleTogglePost} style={{ cursor: 'pointer', marginLeft: '8px', color: '#7A7C7F', fontSize: '12px' }}>
            Share
        </Link>
        <Link onClick={this.handleTogglePost} style={{ cursor: 'pointer', marginLeft: '8px', color: '#7A7C7F', fontSize: '12px' }}>
            1h
        </Link>

    </div>
</ListItem>
</ListItem>

                                </List>
                                <FormControl fullWidth className={classes.margin} variant="outlined" style={{ flexDirection: 'row' }}>
                                    <Avatar aria-label="recipe"
                                        src=""

                                        className={classes.avatar}>
                                        R
                                    </Avatar>

                                    <TextField
                                        id="filled-full-width"
                                        style={{ margin: 8 }}
                                        placeholder="Write a public comment…"
                                        multiline
                                        fullWidth
                                        margin="normal"
                                        variant="filled"
                                    />


                                </FormControl>
                                <Typography variant="body2" color="textSecondary" component="h5">
                                    ⁠              Press Enter to post.
                                </Typography>
                            </CardContent>

                        </Card>
                    </div >
                )
            }
            ))
        return (
            <div>

                {mainChat}
            </div >
        )

    }

}
export async function getServerSideProps() {
    let post = { id: 5 }
    return {
        props: {
            post
        }
    }

}
// @ts-ignore

export default withStyles(chatStyles as any)(ChatComponent)

