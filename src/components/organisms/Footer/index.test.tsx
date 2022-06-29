import  Footer  from ".";
import { render, screen } from "@testing-library/react";

describe("Footer test", () => {
    test("Testing for data", () => {
        render(<Footer />)

        let randomData = screen.getByText("What is Nonfiction?")
        expect(randomData).toBeInTheDocument()
    })
})
