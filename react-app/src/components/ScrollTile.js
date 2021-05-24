import React from 'react'
import Box from '@material-ui/core/Box';
import { Link } from "react-router-dom";

const ScrollTile = ({project}) => {

    

    return (
            <Box minWidth="30%" maxWidth="30%" m="5%">
                <img src={project.img} object-fit="contain" width="100%"></img>
                <Link to={`/projects/${project.id}`}>
                    <h1>{project.title}</h1>
                </Link>
                <div>{project.description}</div>
                <Box display="flex" justifyContent="space-between">
                <h3>by: {project.user.first_name} {project.user.last_name}</h3>
                <h3>{project.amount_raised / project.goal * 100}% Funded</h3>
                </Box>
            </Box>
    )
}

export default ScrollTile