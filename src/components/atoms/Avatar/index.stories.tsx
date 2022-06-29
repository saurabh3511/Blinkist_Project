import React from "react";
import {AvatarProps,AvatarIcon} from ".";
import {Story} from "@storybook/react";

export default{
    title : 'Atoms/Avatars',
    component: AvatarIcon
}

// const Template : Story<AvatarProps> = (letter) => <AvatarIcon/> 

// export const AvatarIconDemo = Template.bind({});
// <AvatarIcon>{A}</AvatarIcon>

export const Avatar = () => <AvatarIcon letter="P" />;