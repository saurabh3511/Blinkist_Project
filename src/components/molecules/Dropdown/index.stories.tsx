import { Story } from "@storybook/react";
import { Dropdown } from ".";

export default {
    title: 'Molecules/Drop Down',
    component: Dropdown
}

const Template: Story<any> = args => <Dropdown {...args} />

export const ExploreDropdown = Template.bind({})
ExploreDropdown.args = {
    title: 'Explore'
}

export const AccountDropdown = Template.bind({})
AccountDropdown.args = {
    title: 'Account'
}