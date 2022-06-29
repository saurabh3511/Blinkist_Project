import React from 'react'
import { Button } from '@mui/material'



export interface ButtonIconProps{
    startIcon?:React.ReactNode,
    endIcon?:React.ReactNode,
    variant?:string,
    style?:React.CSSProperties,
    children?:React.ReactNode,
    onMouseEnter?:() => void;
    onMouseLeave?:() => void;
    onClick?: () => void;   
    className?:string;
}

 export const  ButtonComponent  = (props:any) => {
    let {startIcon,endIcon,variant,style,children,onMouseEnter,onMouseLeave,onClick,className}=props
  return (
    <Button 
    startIcon={startIcon}
    endIcon={endIcon}
    variant={variant}
    style={style}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
    className={className}>
        {children}
    </Button>
  )
}


