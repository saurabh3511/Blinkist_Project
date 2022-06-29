import { ComponentStory } from "@storybook/react";
import { SearchBarComponent } from ".";

export default {
    title: 'Molecules/Search Bar',
    component: SearchBarComponent
}

const Template: ComponentStory<typeof SearchBarComponent> = () => <SearchBarComponent />

export const SearchBar = Template.bind({})
