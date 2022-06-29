import {BookDetails, BookDetailsProps} from '.'
import {Story} from '@storybook/react'
import {HeaderComponent} from '../../organisms/Header'
import Footer from '../../organisms/Footer'
import { BookDescription } from "../../organisms/BookDescription";
import {MemoryRouter} from 'react-router-dom'

export default {
    title: 'Templates/Book Details',
    component: BookDetails
}

let Template: Story<BookDetailsProps> = args => <MemoryRouter><BookDetails {...args} /></MemoryRouter>

export const BookDetailsTemplate = Template.bind({})
BookDetailsTemplate.args = {
    
}