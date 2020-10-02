import './gisbaritems.css'
import React,{Component} from 'react'
import {ButtonBase} from '@material-ui/core'

class GISBarItems extends Component{
    render=()=>{
        return(
            <span id='gisbaritems'>
                <div className='icongroup'>
                    <ButtonBase className="newProject icon"/>
                    <ButtonBase className="openFile icon"/>
                    <ButtonBase className="saveAsFile icon"/>
                    <ButtonBase className="saveFile icon"/> 
                </div>
                <div className='icongroup'>
                    <ButtonBase className="newProject icon"/>
                    <ButtonBase className="openFile icon"/>
                    <ButtonBase className="saveAsFile icon"/>
                    <ButtonBase className="saveFile icon"/> 
                </div>
                <div className='icongroup'>
                    <ButtonBase className="newProject icon"/>
                    <ButtonBase className="openFile icon"/>
                    <ButtonBase className="saveAsFile icon"/>
                    <ButtonBase className="saveFile icon"/> 
                </div>
                <div className='icongroup'>
                    <ButtonBase className="newProject icon"/>
                    <ButtonBase className="openFile icon"/>
                    <ButtonBase className="saveAsFile icon"/>
                    <ButtonBase className="saveFile icon"/> 
                </div>
            </span>
        )
    }
}
export default GISBarItems;