import React from "react";
import {
    Box,
    Button,
    Grid,
    Typography
} from "@mui/material"
import {
  Fade 
} from "react-awesome-reveal"


export default function Home(){
    return(
       <Box
         style={{
            marginTop:"20rem",
            backgroundColor:"#ffffff",
            color:"black"
         }}
       >
        <Grid container
          style={{
            display:"flex",
            justifyContent:"center"
          }}
        >
            <Grid item container
              size={{lg:8, xs:12}}
            >
                <Typography
                  style={{
                    fontSize:"1.2rem",
                    marginBottom:"1rem"
                  }}
                >
                   Hello 👋
                </Typography>
                <Typography
                  style={{
                    fontSize:"2.5rem"
                  }}
                >
                    I'm John Anderson! A Web Developer Building Awesome Webapps And Websites That Powers The Internet
                </Typography>

                <Grid item size={{lg:5}} style={{display:"flex", justifyContent:"left", marginTop:"1rem"}} >
                    <Button
                     variant="contained"
                     style={{
                        padding:"1rem"
                     }}
                    >
                      Projects
                    </Button>
                    <Button
                     variant="outlined"
                     style={{
                        marginLeft:"2rem",
                        padding:"1rem"
                     }}
                    >
                      Contact
                    </Button>
                </Grid>
            </Grid>
          </Grid>
       </Box>
    )
}