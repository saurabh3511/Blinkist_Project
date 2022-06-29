import React from 'react'
import { Typography } from '@mui/material';

interface TypographyProps {
    align?: 'center'
    | 'inherit'
    | 'justify'
    | 'left'
    | 'right';
    children?: React.ReactNode;
    variant: 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'inherit'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2' ;
    className?: string;
    style?: React.CSSProperties;
}

const TypographyComponent = (props: TypographyProps) => {
  return (
    <Typography variant={props.variant} align={props.align} style={props.style}>
        {props.children}
    </Typography>
  )
}

export default TypographyComponent