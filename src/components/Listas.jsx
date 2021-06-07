import React from 'react' 
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@material-ui/core'

import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';


const Listas = () => {
  return(
<div>
    <List component='nav'>
        <ListItem button>
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='HOME ' />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <PersonIcon/>
            </ListItemIcon>
            <ListItemText primary='PERFIL' />
        </ListItem>
        <Divider/>
    </List>
</div>

  )
}

export default Listas;