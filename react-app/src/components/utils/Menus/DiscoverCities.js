import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {NavLink} from "react-router-dom"
import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  link: {
   textDecoration: 'none',
   color: "#0088ff"
  }
}));

export default function DiscoverCities({state}){
  const classes = useStyles()
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return(
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={state.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List  component="div" disablePadding>
         {state.cities.map(city =>
         <NavLink className={classes.link} key={city.id}  to={`/regions/${city.id}`}>
         <ListItem  button>
            <ListItemText  primary={city.name} />
          </ListItem>
          </NavLink>)}
        </List>
      </Collapse>
      </>
  )
}
