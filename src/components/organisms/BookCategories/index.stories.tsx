import { ComponentStory } from "@storybook/react";
import Library from "../../../data/Library";
import Categories from ".";
import {MemoryRouter} from 'react-router-dom'

export default {
    title: "Organisms/Categories",
    component: Categories
}

const Template: ComponentStory<typeof Categories> = args => <MemoryRouter><Categories  {...args} /></MemoryRouter>

export const Featured = Template.bind({})
Featured.args = {
    data: Library,
    ftitle:" ",
    status: "featured"
}

export const JustAdded = Template.bind({})
JustAdded.args = {
    data: Library,
    ftitle:" ",
    status: "justAdded"
}

export const Trending = Template.bind({})
Trending.args = {
    data: Library,
    ftitle:" ",
    status: "trending"
}