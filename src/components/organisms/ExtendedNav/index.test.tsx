import {screen, render, fireEvent} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import { ExtendedNav } from '.'

let TestExtendedNav = () => {
    return (
        <MemoryRouter>
            <ExtendedNav />
        </MemoryRouter>
    )
}


describe("ToolBar",()=>{
    test("Text",()=>{
        render(<TestExtendedNav />)
        expect(screen.getByText("Entrepreneurship")).toBeInTheDocument();
    })
    test("onClick",()=>{
        var result = false;
        render(<TestExtendedNav />)
        fireEvent.click(screen.getByText("Entrepreneurship"));
        expect(result).toBe(false);
    })
})