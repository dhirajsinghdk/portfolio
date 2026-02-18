import { Box, Button, Typography } from "@mui/material"
import React, { useState } from "react"
import Project1 from "../components/project1"
import Project2 from "../components/project2"

export default function Project(){
    const [count, setCount]=useState(0)

    return(
        <Box
          style={{
            marginTop:"10rem"
          }}
        > 
        <Project1 count={count} setCount={setCount} />
        <br/>
        <Project2   count={count} />
     
        </Box>
    )
}