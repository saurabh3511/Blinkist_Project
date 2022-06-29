import { ComponentStory } from "@storybook/react";
import { HeaderComponent } from ".";

export default {
    title: 'Organisms/Header',
    component: HeaderComponent
}

const Template: ComponentStory<typeof HeaderComponent> = () => <HeaderComponent />

export const TestComp = Template.bind({})