import { styled } from "@mui/material/styles";
import { Box, Button, Divider, Grid, Tab, Tabs, Typography } from "@mui/material";



export const Footer = styled(Box)(({ theme }) => ({
   
   position:"absolute",
    height:"80px",
  bottom: 0,
  left:0,
  right:0,
backgroundColor:"#ec5656",
  padding: "20px",

  }));
export const ButtonAdd = styled(Box)(({ theme }) => ({
    backgroundColor:"#ec5656",
    width:"150px",
    height:"150px",
    position:"absolute",
    bottom: 0,
    zIndex:0,
    marginLeft: "auto",
    marginRight: "auto",
    left: 0,
    right: 0,
    borderRadius: "100px",
    span :{
       zIndex:-1,
       display:"flex",
       justifyContent: "center",
       alignItems: "center",
       color:"#ffff",
       fontSize: "120px",
       backgroundColor:" #ec5656",
       borderRadius:"50%",
       cursor: "pointer",
       boxShadow: "inset 0px 5px 5px rgba(68,68,68,0.6)",
       width:"100%",
       height:"100%",
       padding:0,
     }

  }));

  export const Listpokedex = styled(Box)(({ theme }) => ({
    flexWrap: "wrap",
    overflow: "scroll",
    height:"85%",
    zIndex: -1,
    display: "-webkit-box",
    display: "-webkit-flex",
    display:"-ms-flexbox",
    display: "flex",
    width: "100%"
 
   }));