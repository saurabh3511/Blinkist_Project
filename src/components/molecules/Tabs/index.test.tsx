import {render, screen} from '@testing-library/react'
import { TabsComponent } from '.'

describe("Tabs Test", () => {
    test("tabstest", () => {
        render(<TabsComponent />)
        const element = screen.getByText('Currently Reading')
        expect(element).toBeInTheDocument()
    })
    
})