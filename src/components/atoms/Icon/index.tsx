import React from 'react'

export interface IconProps{
    source?:string,
    className?:string,
    onClick?: () => void,
    style?:React.CSSProperties;

}
const Icons= (props:any) => {
    let {source,className,onClick,style}=props
  return (
    <img src={source} alt="Logo" className={className} onClick={onClick}  style={style}/>
  )
}

export default Icons
