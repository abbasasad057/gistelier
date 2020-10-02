import React,{Component} from 'react';
import {Button,ButtonGroup} from '@material-ui/core';
import MenuContent from '../menucontent';

class AppBarItems extends Component{
  constructor(){
    super()
    this.state={menuAnchor:null}
  }

  handleClick=(event)=>{
    console.log(event.target.lastChild.data)
    this.setState({menuAnchor:event.currentTarget})
  }
  handleClose=()=>{
    this.setState({menuAnchor:null})
  }
  render=()=>{
    return(
    <div>
      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <Button className='dense toolbarbutton' disableElevation onClick={this.handleClick}>Project</Button>
        <Button className='dense toolbarbutton' disableElevation onClick={this.handleClick}>Edit</Button>
        <Button className='dense toolbarbutton' disableElevation onClick={this.handleClick}>View</Button>
        <Button className='dense toolbarbutton' disableElevation onClick={this.handleClick}>Layer</Button>
        <Button className='dense toolbarbutton' disableElevation onClick={this.handleClick}>Settings</Button>
        <Button className='dense toolbarbutton' disableElevation onClick={this.handleClick}>Plugin</Button>
        <Button className='dense toolbarbutton' disableElevation onClick={this.handleClick}>Vector</Button>
        <Button className='dense toolbarbutton' disableElevation onClick={this.handleClick}>Raster</Button>
        <Button className='dense toolbarbutton' disableElevation onClick={this.handleClick}>Database</Button>
        <Button className='dense toolbarbutton' disableElevation onClick={this.handleClick}>Web</Button>
        <Button className='dense toolbarbutton' disableElevation onClick={this.handleClick}>Processing</Button>
        <Button className='dense toolbarbutton' disableElevation onClick={this.handleClick}>Help</Button>
      </ButtonGroup>
      <MenuContent 
      anchorEl={this.state.menuAnchor}
      handleClose={this.handleClose}
      />  
    </div>
    )
    }
};

export default AppBarItems;