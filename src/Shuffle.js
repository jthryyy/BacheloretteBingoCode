import React from 'react'
import { Box, Button} from '@material-ui/core';
import bingoItems from '/Users/Lemon/BacheloretteBingo/src/bingoItems.json';

function shuffle(){
    var currentIndex = bingoItems.length,  randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [bingoItems[currentIndex], bingoItems[randomIndex]] = [
            bingoItems[randomIndex], bingoItems[currentIndex]];
            }
  }
function Shuffle()
    {   
        return (
                <Box display="flex" justifyContent="left" alignItems="left">
                    <Button variant="contained" color="#a73a38" justifyCenter="center" onClick={shuffle}>
                        Shuffle
                    </Button>
                </Box>
        )
}

export default Shuffle;
