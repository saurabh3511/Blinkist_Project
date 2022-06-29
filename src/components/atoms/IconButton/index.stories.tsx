import React from "react";
import { Story } from "@storybook/react";
import IconButtonComponent from ".";
import {ReactComponent as SearchIcon} from "../../../images/search.svg"
import { ReactComponent as DropdownIcon } from "../../../images/downarrow.svg";


export default{
    title:"Atoms/Icon Button",
    component:IconButtonComponent,
}
const Template : Story<any> = args => (
    <IconButtonComponent {...args}/>
);

export const SearchIconStory = Template.bind({});
SearchIconStory.args={
    children:<SearchIcon/>
}
export const DropDownIconStory = Template.bind({});
DropDownIconStory.args={
    children:<DropdownIcon/>
}


