import { fireEvent, render, screen } from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom'
import { BookDescription } from ".";

const TestBookDesc = () => {
    return (
        <BrowserRouter>
            <BookDescription />
        </BrowserRouter>
    )
}

describe("Book Description Test", () => {
    test("Test", () => {
        render(<TestBookDesc />)
        
        let timeToRead = screen.getByText("15-minute read")
        expect(timeToRead).toBeInTheDocument()

        let title = screen.getByText("Beyond Entrepreneurship 2.0")
        expect(title).toBeInTheDocument()

        let author = screen.getByText("By Jim Collins and Bill Lazier")
        expect(author).toBeInTheDocument()

        let readNowButton = screen.getByRole("button", { name: "Read now"})
        expect(readNowButton).toBeInTheDocument()

        let finishedReading = screen.getByRole("button", { name: "Finished reading"})
        expect(finishedReading).toBeInTheDocument()

        let sendToKindleButton = screen.getByText("Send to Kindle")
        expect(sendToKindleButton).toBeInTheDocument()
    })
})