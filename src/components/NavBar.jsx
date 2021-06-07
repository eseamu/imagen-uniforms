import React from 'react' 
import {AppBar, IconButton, makeStyles, Toolbar, Typography, Button} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';



const useStyles = makeStyles(theme => ({

  
  menuButton:{
    marginRight:theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
  },
},
  title:{
    flexGrow:1
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${240}px)`,
      marginLeft: 240,
    },
  },
}))





const NavBar = (props) => {
 
 const classes = useStyles()
  return(

 
      <AppBar className={classes.appBar}> 
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
            onClick={() => props.accionAbrir()}
          >
            <MenuIcon/>
          </IconButton>
        <Typography>
          IMAGEN UNIFORMES
        </Typography>
        <Button variant="text" color="inhertil">
          Login
        </Button>
        
        </Toolbar>
      </AppBar>


  )
}

export default NavBar;