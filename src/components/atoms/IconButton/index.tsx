import React from 'react'
import { IconButton } from '@mui/material'

interface IconButtonProps{
    children?:React.ReactNode,
    className?:string,
    style?:React.CSSProperties,
    onClick?: () => void;

}
const IconButtonComponent = (props:IconButtonProps) => {
    let {children,className,style,onClick}=props
  return (
    <IconButton
    onClick={onClick} 
    className={className}
    style={style}
    >
        {children}
    </IconButton>
  )
}
export default IconButtonComponent
 
