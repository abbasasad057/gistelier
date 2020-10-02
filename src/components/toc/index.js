import './toc.css';
import React from 'react';
import {Drawer,List,ListItem,ListItemText} from '@material-ui/core';

function Toc(){
    return(
    <Drawer className='drawer' 
    id='toc1'
    variant="permanent">
    <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
    </List>
    </Drawer>
    )
}

export default Toc;