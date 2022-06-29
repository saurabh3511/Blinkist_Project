import React from "react";
import {Story} from "@storybook/react";
import {ButtonIconProps,ButtonComponent} from ".";
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

//import Button from "./Button";
// import { isPropertyAccessOrQualifiedName } from "typescript";
// import { Container, style } from "@mui/system";

export default{
    title : 'Atoms/Buttons',
    component: ButtonComponent
}

const Template : Story<ButtonIconProps> = args =><ButtonComponent{...args}/>

export const AddToLibButtonHoverState = Template.bind({})

AddToLibButtonHoverState.args={
    variant:'contained',
    startIcon:<AddIcon/>,
    style:{
        backgroundColor: '#0365F2',
        color: 'white',
        textTransform: 'none'

    },
    children: 'Add to library'

}

export const AddtoLibDullState = Template.bind({})
AddtoLibDullState.args={
    variant: 'text',
    startIcon: <AddIcon/>,
    style:{
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '20px',
        textTransform: 'none',
        color: '#0365F2'
    },
    children: 'Add to library'

}

export const ReadNow = Template.bind({});

ReadNow.args = {
    variant: 'outline',
    style: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '12px 24px 12px 24px',
        gap: '10px',
        textTransform: 'none',
        borderRadius: '4px',
        border: '1px solid lightgray',
        fontFamily: 'Cera Pro',
        color: '#22C870',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '20px',
    },
    children:'Read now'
}

export const FinishedReading = Template.bind({});
FinishedReading.args={
    variant:'contained',
    
    style:{
        position: 'absolute',
        
        padding: '12px 24px',
        gap: '10px',
        background: '#2CE080',
        textTransform: 'none',
        fontFamily: 'Cera Pro',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#03314B',

    },
    children:"Finished Reading",

}
export const SendToKindle = Template.bind({})
SendToKindle.args = {
    variant: 'text',
    style: {
        color: '#6D787E',
        textTransform: 'none',
        padding: '12px 24px 12px 24px'
    },
    endIcon: <ArrowForwardIcon />,
    children: 'Send to Kindle'
}
