import { ComponentStory } from "@storybook/react";
import {Tabs} from ".";

export default {
    title: 'Organisms/Tabs',
    component: Tabs
}

let Template: ComponentStory<typeof Tabs> = () => <Tabs />

export const TabComponent = Template.bind({})
TabComponent.args = {

}