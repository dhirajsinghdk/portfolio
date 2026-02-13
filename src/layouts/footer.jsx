import React from "react";
import {
   Box,
   Grid,
   Typography
} from "@mui/material"
import { Link } from "react-router-dom";
import {
    FacebookOutlined,
    Instagram,
    LinkedIn,
    GitHub,
    Pinterest
} from "@mui/icons-material"


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

   const bottomLinks=[
    {
        title:<FacebookOutlined/>,
        link:"https://facebook.com"
    },
    {
        title:<Instagram/>,
        link:"https://instagram.com"
    },
    {
        title:<LinkedIn/>,
        link:"https://linkedin.com"
    },
    {
        title:<GitHub/>,
        link:"https://github.com"
    },
    {
        title:<Pinterest/>,
        link:"https://pinterest.com"
    },
   ]


export default function Footer(){
    return(
        <>
        
  
       <Box
         sx={{
            backgroundColor:"black",
            p:8,
            mt:20,
            color:"white"
         }}
       >
        <Grid container
          style={{
            display:"flex",
            justifyContent:"center"
          }}
        >
            <Grid item container size={{lg:4, xs:12}} style={{display:"flex", justifyContent:"center"}}> 
                 {navItems.map((nav)=>(
                    <Grid item
                       size={{lg:2, xs:4}}
                    >
                      <Link
                         style={{
                            textDecoration:"none",
                            color:"white"
                         }}
                         to={nav.link}
                      >
                        {nav.title}
                      </Link>
                    </Grid>
                    ))}
            </Grid>
        </Grid>
        <Grid container style={{display:"flex", justifyContent:"center", marginTop:"2rem"}}>
            <Grid item size={{lg:8, xs:8}}>
                 <Box
                   style={{
                    height:"1px",
                    width:"full",
                    backgroundColor:"white"
                   }}
                 > </Box>
            </Grid>

        </Grid>

     <Grid container
          style={{
            display:"flex",
            justifyContent:"center",
            marginTop:"2rem"
          }}
        >
            <Grid item container size={{lg:3, xs:12}} style={{display:"flex", justifyContent:"center"}}> 
                 {bottomLinks.map((nav)=>(
                    <Grid item
                       size={{lg:2, xs:4}}
                    >
                      <Link
                         style={{
                            textDecoration:"none",
                            color:"white"
                         }}
                         to={nav.link}
                      >
                        {nav.title}
                      </Link>
                    </Grid>
                    ))}
            </Grid>
        </Grid>
    
       </Box>
     <Grid container
          style={{
            padding:"2rem",
            backgroundColor:"#222222",
            display:"flex",
            justifyContent:"center",
            color:"white"
          }}
        >
            <Grid item
              size={{
                lg:3, xs:5
              }}
            >
                <Typography
                  style={{
                    fontSize:".8rem"
                  }}
                >
                    <Link
                     to="/linkdata"
                    >
                      WowFolio{"  "}
                    </Link>
                    Open-Source Template 2026. Made by Ram Maheshwari
                </Typography>
            </Grid>

        </Grid>
       </>

    )
}