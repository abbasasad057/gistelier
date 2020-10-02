import React,{Component} from 'react';
import {Menu , MenuItem } from '@material-ui/core';

class MenuContent extends Component{
    render=()=>{
        return(
            <Menu 
            elevation={0}
            keepMounted
            anchorEl={this.props.anchorEl}
            open={Boolean(this.props.anchorEl)}
            onClose ={this.props.handleClose}
            >
                <MenuItem>Item 1</MenuItem>
                <hr/>
                <MenuItem>Item 2</MenuItem>
                <hr/>
                <MenuItem>Item 3</MenuItem>
            </Menu>
        )     
    }
}

export default MenuContent;