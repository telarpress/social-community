import React ,{ Component ,useState} from 'react';
import Button from '@material-ui/core/Button';
import {profileProps} from './profileInfoProps';
import Faker from 'faker';
import {profileState} from './profileInfoState';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import { GetServerSideProps } from 'next'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
class ProfileInfoComponent extends Component<profileProps,profileState>{

    constructor(props){
        super(props)


    }

    render(){
        return(
            <div style={{display: 'flex', justifyContent:'center'}}>
               <Grid container   style={{paddingTop:'27px !important',padding:'22px',maxWidth: '1233px',height: '136px'}}> 

               <Grid item xs={12} sm={12} lg={10} style={{paddingLeft:'6px'}} >
                    <div>
                        <div className='profile_title'>
                        <Typography
                      
                        variant={"h5"}
                        gutterBottom
                    >
                       milad morovati
                    </Typography>
                        </div>    
                        <div className='profile_count_follow'>
                                Public group  38.0K members
                    
                            </div>          
                    </div>
            
              </Grid>
                    <div>
                    <Button
                        variant="contained"
                        color="default"
                        startIcon={<GroupAddIcon />}
                    >
                    Joined
                    </Button>
                    </div>
               </Grid>
        </div>
        );


    }

}
export default ProfileInfoComponent