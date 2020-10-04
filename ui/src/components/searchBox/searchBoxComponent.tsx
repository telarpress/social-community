import React, {Component} from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Toolbar from "@material-ui/core/Toolbar";
import {SearchBoxProps} from './searchBoxProps';
import {SearchBoxState} from "./searchBoxState";
import {SearchBoxStyle} from "./searchBoxStyle"
import {withStyles} from "@material-ui/core/styles";

class SearchBoxComponent extends Component<SearchBoxProps, SearchBoxState>{

    render(){
        const {classes, theme} = this.props
        return (
            <div>

         <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Find your favorite posts and people ..."
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
         </div>
         {/*Search Mobile*/}
         <div className={classes.searchMobile}>
             <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>

                </div>

         </div>

        )
    }
}


export default withStyles(SearchBoxStyle as any)(SearchBoxComponent);