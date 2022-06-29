import {HeaderComponent} from './index'
import { fireEvent, render, screen } from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom'

let TestHeader = () => {
    return (
        <BrowserRouter>
            <HeaderComponent />
        </BrowserRouter>
    )
}

describe("Header test", () => {
    test("Existence test", () => {
        render(<TestHeader />)

        const logos = screen.getAllByAltText("Logo")
        let element = logos[2]

        fireEvent.click(element)
        let extendedNavTest = screen.getByText("Politics")
        expect(extendedNavTest).toBeInTheDocument()
    })
})