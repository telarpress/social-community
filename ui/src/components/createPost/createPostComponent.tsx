import React, {Component} from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import {CreatePostState} from "./createPostState";
import {CreatePostProps} from "./createPostProps"
import  {CreatePostStyle} from "./createPostStyle";
import {withStyles} from "@material-ui/core/styles";
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
class CreatePostComponent extends Component<CreatePostProps,CreatePostState>{
    constructor(props:CreatePostProps) {
        super(props);
        this.state = {
            openDialog:false,
            anchorEl:null,
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
        this.setState({ openVideoDialog:! this.state.openVideoDialog })
    }
    handleToggleMorePost = () => {

        this.setState({ openMorePostDialog:! this.state.openMorePostDialog })
    }
    handleClose = (message) => () => {
        this.setState({ anchorEl: null });
        console.log(message);
    };
    handleUploadClick = (e) => {


    }
    handleCloseVideo = () => {
        this.setState({ openVideoDialog:! this.state.openVideoDialog })
    }
    render(){
        const {classes, theme} = this.props;
        // @ts-ignore
        const postDialog = (
            <Dialog open={this.state.openDialog}   onClose={this.handleClose} aria-labelledby="form-dialog-title">
                <div style={{width: 500}}>
                    <DialogContent>
                        <DialogTitle id="form-dialog-title">Comment</DialogTitle>
                        <IconButton  style={{float:'right',marginTop:'-52px'}} onClick={() => this.handleToggleMorePost()}>  <MoreIcon  />
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
            <Dialog open={this.state.openVideoDialog}   onClose={this.handleToggleVideo} aria-labelledby="form-dialog-title">
                <div style={{width: 290}}>
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
                <Card   onClick={() => this.handleClickToggle()}>
                    <CardHeader
                        subheader="Create Post"
                    >
                    </CardHeader>
                    <Divider variant="inset" className={classes.divider} component="li" />
                    <CardContent  >
                        <Avatar
                            src={
                                Faker.internet.avatar()
                            }
                        />
                        <Typography
                            className={classes.typographyHeading}
                            variant={"subtitle2"}
                            gutterBottom
                        >
                            Whats new with you ?
                        </Typography>

                    </CardContent>
                </Card>
                {postDialog}
                {addVideo}
            </div>
        )
    }

}
export default withStyles(CreatePostStyle as any)(CreatePostComponent)