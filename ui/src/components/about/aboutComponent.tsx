import React, { Component, useState } from "react";
import PublicIcon from '@material-ui/icons/Public';
import Typography from '@material-ui/core/Typography';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import { ChatProps } from './aboutProps';
import Faker from 'faker';
import { withStyles } from '@material-ui/core/styles';
import { aboutStyle } from './homeStyle'
import { ChatState } from './aboutState';
import Card from "@material-ui/core/Card";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText'; 
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import VisibilityIcon from '@material-ui/icons/Visibility';
class AboutComponent extends Component<ChatProps, ChatState>{

    constructor(props){
        super(props)


    }

    render(){
        const { classes, theme, posts } = this.props;
        return(
            <div>
  <Card className={classes.card}>

<Typography variant="body2" color="textSecondary" component="h2" style={{
    fontSize: '1.0625rem',
    padding: '14px', fontWeight: 'bold', color: '#000'
}} >
    About
</Typography>

<Typography variant="body2" color="textSecondary" component="h3" style={{
    marginTop: '14px', padding: '14px', color: '#000'
}} >
    This group is for everyone who likes mountains, hiking, nature and outdoors. The beauty of mountains revealed by pictures and videos ... share your pictures and have a good time!
</Typography>

<List
    component="nav"
    aria-labelledby="nested-list-subheader"
>
    <ListItem >
        <ListItemIcon style={{ minWidth: '34px', marginTop: '-19px' }}>
            <PublicIcon style={{ fontSize: '21px', color: '#000' }} />
        </ListItemIcon>
        <ListItemText primary="Public" secondary="Anyone can see who's in the group and what they post." />
    </ListItem>
    <ListItem >
        <ListItemIcon style={{ minWidth: '34px', marginTop: '-19px' }}>
            <VisibilityIcon style={{ fontSize: '21px', color: '#000' }} />
        </ListItemIcon>
        <ListItemText primary="Visible" secondary="Anyone can find this group." />
    </ListItem>
    <ListItem >
        <ListItemIcon style={{ minWidth: '34px' }}>
            <PeopleAltIcon style={{ fontSize: '21px', color: '#000' }} />
        </ListItemIcon>
        <ListItemText primary="General" />
    </ListItem>

</List>
</Card>
            </div>
          
        )


    }
}

export default withStyles(aboutStyle as any)(AboutComponent) 

