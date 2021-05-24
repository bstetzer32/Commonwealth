import React from "react";
import Box from '@material-ui/core/Box';
import { Link } from "react-router-dom";

const RecomendedTile = ({project}) => {
    return (
        <Box width="90%" m="5%" height="20%" display="flex">
            <img src={project.img} object-fit="contain" width="40%"></img>
            <Box>
            <Link to={`/projects/${project.id}`}>
                <h1>{project.title}</h1>
            </Link>
            <div>{project.description}</div>
            <Box display="flex" justifyContent="space-between">
            <h4>by: {project.user.first_name} {project.user.last_name}</h4>
            <h4>{project.amount_raised / project.goal * 100}% Funded</h4>
            </Box>
            </Box>
        </Box>
    )
}

export default RecomendedTile