import React ,{ Component ,useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {MediaProps} from './mediaProps';
import {MediaState} from './mediaState';
import Card from "@material-ui/core/Card";
import  {MediaStyles} from './mediaStyles'
import Typography from '@material-ui/core/Typography';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';

class MediaComponent extends Component<MediaProps,MediaState>{

    constructor(props){
        super(props)

    }

    render(){
        const { classes, theme, posts } = this.props;
        return(
            <Card className={classes.card} style={{marginTop:'15px'}}>

            <Typography variant="body2" color="textSecondary" component="h2" style={{
                fontSize: '1.0625rem',
                padding: '14px', fontWeight: 'bold', color: '#000'
            }} >
                Recent media
            </Typography>

            <ImageList rowHeight={144} className={classes.imageList} style={{marginBottom:'15px',padding:'26px' }}>
     
                <ImageListItem  style={{borderRadius:'9px' ,  width: 'calc( (100% - 8px) / 3)'}}>
                    <img  style={{borderRadius:'9px'}} src="https://upload.wikimedia.org/wikipedia/commons/0/08/Iguana_%28249529699%29.jpeg"   />
                  
                </ImageListItem>

                <ImageListItem  style={{borderRadius: '9px' ,  width: 'calc( (100% - 8px) / 3)'}}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Iguana_%28249529699%29.jpeg"   />
                  
                </ImageListItem>
                <ImageListItem  style={{borderRadius: '9px' ,  width: 'calc( (100% - 8px) / 3)'}}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Iguana_%28249529699%29.jpeg"   />
                  
                </ImageListItem>

                <ImageListItem  style={{borderRadius: '9px' ,  width: 'calc( (100% - 8px) / 3)'}}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Iguana_%28249529699%29.jpeg"   />
                  
                </ImageListItem>
            </ImageList> 
            
        </Card>
     
        )


    }

}
export default withStyles(MediaStyles as any)(MediaComponent)