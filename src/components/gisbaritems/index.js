import './gisbaritems.css'
import React,{Component} from 'react'
import {ButtonBase,Divider,Toolbar} from '@material-ui/core'

class GISBarItems extends Component{
    render=()=>{
        return(
            <div id='gisbaritems'>
                <Toolbar className='dense gray'>
                    <div className='icongroup'>
                        <ButtonBase className="newProject icon"/>
                        <ButtonBase className="openFile icon"/>
                        <ButtonBase className="saveAsFile icon"/>
                        <ButtonBase className="saveFile icon"/> 
                    </div>
                    <div className='icongroup'>
                        <ButtonBase className="pan icon"/>
                        <ButtonBase className="zoomIn icon"/>
                        <ButtonBase className="zoomOut icon"/>
                        <ButtonBase className="zoomExtent icon"/> 
                        <ButtonBase className="zoomSelection icon"/>
                        <ButtonBase className="zoomLayer icon"/>
                        <ButtonBase className="zoomRegion icon"/>
                        <ButtonBase className="zoomLast icon"/> 
                        <ButtonBase className="zoomNext icon"/>    
                    </div>
                    <div className='icongroup'>
                        <ButtonBase className="addBookmark icon"/>
                        <ButtonBase className="showBookmark icon"/>
                    </div>
                    <div className='icongroup'>
                        <ButtonBase className="redraw icon"/>
                        <ButtonBase className="undo icon"/>
                        <ButtonBase className="redo icon"/>
                    </div>
                    <div className='icongroup'>
                        <ButtonBase className="select icon"/>
                        <ButtonBase className="unselect icon"/>
                        <ButtonBase className="selectionInvert icon"/>
                        <ButtonBase className="deleteSelected icon"/>
                        <ButtonBase className="measure icon"/>
                        <ButtonBase className="table icon"/>
                        <ButtonBase className="calculator icon"/>
                    </div>
                    <div className='icongroup'>
                        <ButtonBase className="modelBuilder icon"/>
                        <ButtonBase className="python icon"/>
                        <ButtonBase className="tools icon"/>                    
                    </div>
                    <div className='icongroup'>
                        <ButtonBase className="print icon"/>
                        <ButtonBase className="help icon"/>
                        <ButtonBase className="settings icon"/>
                    </div>
                </Toolbar>
                <Divider/>
                <Toolbar className='dense gray'>
                <div className='icongroup'>
                        <ButtonBase className="layerDb  icon"/>
                        <ButtonBase className="layerDbAdd icon"/>
                        <ButtonBase className="layerDbCreate icon"/>
                        <ButtonBase className="createQueryLayer icon"/>
                        <ButtonBase className="layerDbExport icon"/>
                        <ButtonBase className="layerDbImport icon"/>
                </div>
                <div className='icongroup'>
                        <ButtonBase className="layerAdd  icon"/>
                        <ButtonBase className="layerCreate icon"/>
                        <ButtonBase className="layerEdit icon"/>
                        <ButtonBase className="layerExport icon"/>
                        <ButtonBase className="layerImport icon"/>
                        <ButtonBase className="layerRemove icon"/>
                        <ButtonBase className="layerOpacityIncrease icon"/>
                        <ButtonBase className="layerOpacityDecrease icon"/>
                </div>
                </Toolbar>
            </div>
        )
    }
}
export default GISBarItems;