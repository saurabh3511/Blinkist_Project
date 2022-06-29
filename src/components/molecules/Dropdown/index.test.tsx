import { render, screen } from "@testing-library/react";
import { Dropdown } from ".";

describe("Dropdown test", () => {
    test("Explore dropdown test", () => {
        render(<Dropdown title={"Explore"} />)
        const explore = screen.getByText('Explore')
        expect(explore).toBeInTheDocument()
    })

    test("Account dropdown test", () => {
        render(<Dropdown title={"Account"} />)
       
    })
})