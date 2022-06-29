import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import React from "react";
import  Footer  from "../../organisms/Footer/index";
import { HeaderComponent } from "../../organisms/Header/index";
import theme from "../../themes/theme";


export interface MyLibraryProps {

    body: React.ReactNode;
}


export const MyLibrary = (props: MyLibraryProps) => {
    let {body} = props
    
    return (
        <>
        <ThemeProvider theme={theme}>
        <div style={{display:'flex', flexDirection:'column'}}>
            <HeaderComponent/>
            <div style={ {paddingBottom:"3.5%"}}>
            <Typography variant="h1" style={{
                display: 'flex',
                flexDirection: 'row',
                position: 'relative',
                top: 17,
                left: 493,
                fontSize:45,
            }}>My Library</Typography>
            </div>
            <div style={{width:"100%", display: 'flex', justifyContent:'center'}}>
            {body}
            </div>
            <Footer/>
        </div>
        </ThemeProvider>
        </>
    )
}