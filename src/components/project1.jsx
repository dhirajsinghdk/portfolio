import { Box, Button } from "@mui/material";
import React from "react";


export default function Project1({count, setCount}){
   const handleButton=()=>{
        setCount(count + 1)
    }
    return(
       <Box>
          <Button
            variant="outlined"
            onClick={handleButton}
          >
            Add Data
          </Button>
       </Box>
    )
}