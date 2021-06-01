import React from "react";
import { Box, Typography} from '@material-ui/core';

function bingoHeader () {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <Typography variant='h4' align='center' gutterBottom>
          Bachelorette Bingo
        </Typography>
      
        <Typography variant='subtitle1' align='center' gutterBottom>
          Join Katie on Her journey to find Love
        </Typography>
      
      </Box>

    )
}

export default bingoHeader;
