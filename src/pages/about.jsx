import React from "react"
import {
    Box,
    Grid,
    Button,
    Typography
} from "@mui/material"


export default function AboutUs(){

    return(
        <Box
           style={{
            marginTop:"8rem"
           }}
        >
         <Grid container
           style={{
            display:"flex",
            justifyContent:"center"
           }}
         >
            <Grid item container size={{lg:8,xs:12}} spacing={2}>
                <Grid item size={{lg:12, xs:12}} style={{marginBottom:"5rem"}}>
                    <Typography
                      style={{
                        fontSize:"1.2rem"
                      }}
                    >
                     About 🦄
                    </Typography>
                    <Typography
                      style={{
                        fontSize:"2.5rem"
                      }}
                    >
                     Here you will find more information about me, what I do, and list of my current skills in programming
                    </Typography>
                </Grid>
                <Grid item size={{lg:6, xs:12}}>
                     <Typography
                      style={{
                        fontSize:"1.5rem"
                      }}
                    >
                     My Story
                    </Typography>

                     <Typography
                      style={{
                        fontSize:"1.2rem",
                        marginBottom:"2rem",
                        textAlign:"justify"
                      }}
                    >
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, aliquid! Itaque corrupti magnam fugiat mollitia labore magni saepe veritatis voluptatum alias fugit.
                      Explicabo ducimus sequi aut corporis odio repellendus? Lorem ipsum dolor sit amet 
                      <br/>
                      <br/>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, aliquid! Itaque corrupti magnam fugiat mollitia labore magni saepe veritatis voluptatum alias fugit. 
                      Explicabo ducimus sequi aut corporis odio repellendus? Lorem ipsum dolor sit amet 
                      <br/>
                      <br/>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, aliquid! Itaque corrupti magnam fugiat mollitia labore magni saepe veritatis voluptatum alias fugit.
                    Explicabo ducimus sequi aut corporis odio repellendus? Lorem ipsum dolor sit amet
                    </Typography>

                    <Button
                      size="large"
                      variant="contained"
                    >
                        Projects
                    </Button>
                
                </Grid>
                <Grid item size={{lg:6, xs:12}}>
                    <Typography
                      style={{
                        fontSize:"1.5rem"
                      }}
                    >
                       My Skills
                    </Typography>

                    <Box>
                        <Grid container spacing={1}>
                            {["HTML", "CSS", "JAVASCRIPT", "REACT", "NODE", "GIT", "VSCODE"].map((data)=>(
                               <Grid item size={{lg:3, xs:3}}>
                                    <Box
                                    style={{
                                        backgroundColor:"#eeeeee",
                                        color:"#78a7d8",
                                        textAlign:"center",
                                        padding:"1rem",
                                        borderRadius:".5rem"
                                    }}
                                    >
                                    {data}
                                    </Box>

                               </Grid> 
                            ))}

                        </Grid>
                    </Box>
                </Grid>
            </Grid>
         </Grid>
        </Box>
    )
}