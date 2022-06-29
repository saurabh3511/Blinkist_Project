import { render, screen } from "@testing-library/react";
import { AboutBook } from ".";


describe("About book testing", () => {
    test("Testing for tabs", () => {
        render(<AboutBook />)
        const tab1 = screen.getByText("Synopsis")
        const tab2 = screen.getByText("Who is it for?")
        const tab3 = screen.getByText("About the author")

        expect(tab1).toBeInTheDocument()
        expect(tab2).toBeInTheDocument()
        expect(tab3).toBeInTheDocument()
    })
})