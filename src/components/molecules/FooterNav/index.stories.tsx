import { Story } from "@storybook/react";
import { FooterNav, FooterNavProps } from ".";
import {FooterNavData as data} from '../../../data/FooterNavData'

export default {
    title: 'Molecules/Footer Nav',
    component: FooterNav
}

let Template: Story<FooterNavProps> = args => <FooterNav {...args} />

export const FooterNavComponent = Template.bind({})
FooterNavComponent.args = {
    title: data.Editorial.title,
    data: data.Editorial.data
}