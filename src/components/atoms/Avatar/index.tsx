import React from "react";
import Avatar from '@mui/material/Avatar';


export interface AvatarProps{
    letter?:string;
    // children?: React.ReactNode,
}

export function AvatarIcon(props:AvatarProps){

    return(
        <Avatar  sx={{ bgcolor: '#69A6E3', display: 'flex', alignItems: 'center', 
        textAlign: 'center',color: '#FDFAFA'
        }}
        data-testid="Avatar">
                {props.letter}
        </Avatar>
    );

}