import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";

import Typography from "@material-ui/core/Typography";
import { CreatePostState } from "./createPostState";
import { CreatePostProps } from "./createPostProps"
import { CreatePostStyle } from "./createPostStyle";
import { withStyles } from "@material-ui/core/styles";
import Faker from 'faker';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import MoreIcon from "@material-ui/icons/MoreVert";
import Popover from "@material-ui/core/Popover";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import Button from "@material-ui/core/Button";
import PermMediaIcon from '@material-ui/icons/PermMedia';
import PollIcon from '@material-ui/icons/Poll';
class CreatePostComponent extends Component<CreatePostProps, CreatePostState>{
    constructor(props: CreatePostProps) {
        super(props);
        this.state = {
            openDialog: false,
            anchorEl: null,
            mainState: "initial", // initial, search, gallery, uploaded
            imageUploaded: 0,
            selectedFile: null,
            openVideoDialog: false,
            openMorePostDialog: false,
            openMorePost: false,
        }
    }
    handleClickToggle = () => {
        this.setState({ openDialog: !this.state.openDialog })
    }
    handleToggleVideo = () => {
        this.setState({ openVideoDialog: !this.state.openVideoDialog })
    }
    handleToggleMorePost = () => {

        this.setState({ openMorePostDialog: !this.state.openMorePostDialog })
    }
    handleClose = (message) => () => {
        this.setState({ anchorEl: null });
        console.log(message);
    };
    handleUploadClick = (e) => {


    }
    handleCloseVideo = () => {
        this.setState({ openVideoDialog: !this.state.openVideoDialog })
    }
    render() {
        const { classes, theme } = this.props;
        // @ts-ignore
        const postDialog = (
            <Dialog open={this.state.openDialog} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                <div style={{   }}>
                    <DialogContent>
                        <DialogTitle id="form-dialog-title">Comment</DialogTitle>
                        <IconButton style={{ float: 'right', marginTop: '-52px' }} onClick={() => this.handleToggleMorePost()}>  <MoreIcon />
                        </IconButton>
                        <Popover
                            open={this.state.openMorePostDialog}
                            anchorReference="anchorPosition"
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            anchorPosition={{ top: 320, left: 785 }}
                            onClose={this.handleToggleMorePost}

                        >
                            <Box p={2}>
                                <Typography>The content of the Popover.</Typography>
                            </Box>
                        </Popover>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="What's new with you ?"
                            type="email"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Grid container >

                            <input
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file"
                                multiple
                                type="file"
                                onChange={this.handleUploadClick}
                            />
                            <label htmlFor="contained-button-file">
                                <Fab component="span" className={classes.addPhoto} >
                                    <AddPhotoAlternateIcon />
                                </Fab>
                            </label>
                            <Fab component="span" color="inherit" onClick={() => this.handleToggleVideo()} className={classes.addVideo}>
                                <VideoCallIcon />
                            </Fab>

                        </Grid>

                        <Button onClick={this.handleClickToggle} color="default">
                            CANCEL
                        </Button>
                        <Button onClick={this.handleClickToggle} color="default">
                            POST

                        </Button>
                    </DialogActions>
                </div>
            </Dialog>
        );
        const addVideo = (
            <Dialog open={this.state.openVideoDialog} onClose={this.handleToggleVideo} aria-labelledby="form-dialog-title">
                <div style={{ width: 290 }}>
                    <DialogContent>
                        <DialogTitle id="form-dialog-title"> Add Video Link  </DialogTitle>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Add Video Link"
                            type="link"
                            name="link"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>

                        <Button onClick={() => this.handleCloseVideo()} color="default">
                            CANCEL
                        </Button>
                        <Button onClick={this.handleCloseVideo} color="default">
                            OK
                        </Button>
                    </DialogActions>

                </div>
            </Dialog>
        )
        return (
            <div>
                <Card onClick={() => this.handleClickToggle()}>
                    <Divider variant="inset" className={classes.divider} component="li" />
                    <CardContent style={{ borderBottom: '1px solid #eee' }} >
                        <Avatar
                            src="https://scontent-amt2-1.xx.fbcdn.net/v/t1.30497-1/cp0/p40x40/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=8eywajsP12oAX8CUhJz&_nc_ht=scontent-amt2-1.xx&oh=e6750e0aeade4bc0c935ec38e57c39bc&oe=615529A3"
                        />
                        <Typography
                            className={classes.typographyHeading}
                            variant={"subtitle2"}
                            gutterBottom
                        >
                            Whats new with you ?
                        </Typography>

                    </CardContent>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <IconButton onClick={() => this.handleToggleMorePost()}>
                            <VideoCallIcon style={{ color: '#F02849', fontSize: '30px' }} />
                        </IconButton>
                        <IconButton onClick={() => this.handleToggleMorePost()} style={{
                            marginRight: '184px',
                            marginLeft: '184px'
                        }}>
                            <PermMediaIcon style={{ color: '#41B35D' }} />
                        </IconButton>
                    </div>
                </Card>
                {postDialog}
                {addVideo}
            </div>
        )
    }

}
export default withStyles(CreatePostStyle as any)(CreatePostComponent)