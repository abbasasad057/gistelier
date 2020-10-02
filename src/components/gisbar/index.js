import './gisbar.css';
import React,{Component} from 'react';
import { AppBar,Divider,Toolbar} from '@material-ui/core';
import AppBarItems from '../appbaritems';
import GISBarItems from '../gisbaritems'



class GISBar extends Component{
  render(){
    return(
      <AppBar position="fixed" id="appBar">
      <Toolbar className='dense'>
        <AppBarItems/>
      </Toolbar>
      <Divider/>
      <Toolbar className='dense gray'>
        <GISBarItems/>
      </Toolbar>
      <Divider/>
      <Toolbar className='dense gray'>
        <GISBarItems/>
      </Toolbar>
      <Divider/>
      </AppBar>
    )
  }
}

export default GISBar