import React ,{ Component ,useState} from 'react';
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

import {CoverProps} from './coverProps';
import Faker from 'faker';
import {CoverState} from './coverState';
import Card from "@material-ui/core/Card";
import  {CoverStyles} from './coverStyles'
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import {HomeHeaderProps} from "../homeHeader/homeHeaderProps";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import MenuList from "@material-ui/core/MenuList";
import Toolbar from "@material-ui/core/Toolbar"
import { GetServerSideProps } from 'next'


class CoverComponent extends Component<CoverProps,CoverState>{

    constructor(props){
        super(props)


    }

    render(){
        return(
            <div style={{display: 'flex' ,justifyContent: 'center', alignItems: 'center'}}> 
            <Box component="span" m={1} style={{display: 'block' ,height: '400px'}}>
      
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Iguana_%28249529699%29.jpeg' style={{height: '400px' ,width:'1258px' ,borderBottomRightRadius: '8px',borderBottomLeftRadius: '8px'}}/> 
            </Box>
           </div>
     
        )


    }

}
export default withStyles(CoverStyles as any)(CoverComponent)