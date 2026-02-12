import React from "react";
import {
   AppBar,
   Grid ,
   Avatar,
   Typography 
} from "@mui/material"
import Logo from "../assets/image/sa.png"
import {
    Link
} from "react-router-dom"


export default function Navbar(){
   const navItems=[
    {
        title:"Home",
        link:"/home"
    },
    {
        title:"About",
        link:"/about"
    },
    {
        title:"Projects",
        link:"/project"
    },
    {
        title:"Contact",
        link:"/contact"
    },
   ]




    return(
        <AppBar 
           sx={{
            p:4,
            backgroundColor:"white",
            color:"black"
           }}
        >
            <Grid container style={{display:"flex", justifyContent:"space-between"}}>
                <Grid item size={{lg:4, xs:12}} style={{display:"flex"}}>
                   <Avatar 
                       alt="Remy Sharp" 
                       src={Logo} 
                       style={{
                            border:"1px solid black"
                        }}
                       />
                       <Typography
                         style={{
                            marginTop:"0.5rem",
                            fontSize:"1.2rem",
                            marginLeft:"0.5rem"
                         }}
                       >
                          Mohan Singh
                       </Typography>
                </Grid>
                <Grid item container size={{lg:3, xs:12}} style={{display:"flex", justifyContent:"flex-end"}}>
                    {navItems.map((nav)=>(
                    <Grid item
                       size={{lg:2, xs:4}}
                    >
                      <Link
                         style={{
                            textDecoration:"none",
                            color:"black"
                         }}
                         to={nav.link}
                      >
                        {nav.title}
                      </Link>
                    </Grid>
                    ))}

                </Grid>
            </Grid>
        </AppBar>
    )
}