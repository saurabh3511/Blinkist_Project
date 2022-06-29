import {fireEvent,render, screen} from '@testing-library/react'
import { SearchBarComponent } from '.'

describe("Search bar test", () => {
    test("Search bar", () => {
        render(<SearchBarComponent />)
        const element = screen.getByPlaceholderText("Search by title or author")
        expect(element).toBeInTheDocument();
        fireEvent.change(element, { target: { value: "searching" } });
    expect(element).toHaveValue("searching");
    })
})