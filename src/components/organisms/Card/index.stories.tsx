import { Story } from "@storybook/react";
import { Card, CardProps } from ".";
import beingBoss from '../../../images/beingBoss.svg'
import {MemoryRouter} from 'react-router-dom'

export default {
    title: 'Organisms/Card',
    component: Card
}

let Template: Story<CardProps> = args => <MemoryRouter><Card {...args} /></MemoryRouter>

export const CardComponent = Template.bind({})
CardComponent.args = {
    image: beingBoss,
    title: "Being Boss",
    author: 'Kathleen Shannon and Emily...',
    timeToRead: '13-minute read',
    numberOfReads: '1.9k reads',
    isFinished: true,
    
}
export const CardComponent1 = Template.bind({})
CardComponent1.args = {
    image: beingBoss,
    title: "Being Boss",
    author: 'Kathleen Shannon and Emily...',
    timeToRead: '13-minute read',
    numberOfReads: '1.9k reads',
    addToLibrary: true,
    
}
export const CardComponent2 = Template.bind({})
CardComponent2.args = {
    image: beingBoss,
    title: "Being Boss",
    author: 'Kathleen Shannon and Emily...',
    timeToRead: '13-minute read',
    numberOfReads: '1.9k reads',
    readAgain: true,
    
}