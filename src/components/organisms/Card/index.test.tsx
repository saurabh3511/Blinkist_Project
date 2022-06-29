import {  render, screen } from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom'
import {Card} from './index'

let TestCard = (args: any) => {
    return (
        <BrowserRouter>
            <Card {...args} />
        </BrowserRouter>
    )
}

describe("Card test", () => {
    test("Finished card test", () => {
         render(<TestCard value={1} title="Test Card" author="Test author" numberOfReads="1.9k reads" timeToRead="13-minute read" isFinished={true} />)

        const title = screen.getByText("Test Card")
        expect(title).toBeInTheDocument()

        const author = screen.getByText("Test author")
        expect(author).toBeInTheDocument()

        const finishedButton = screen.getByText("Finished")
        expect(finishedButton).toBeInTheDocument()

        const numberOfReads = screen.getByText("1.9k reads")
        expect(numberOfReads).toBeInTheDocument()

        const timeToRead = screen.getByText("13-minute read")
        expect(timeToRead).toBeInTheDocument()
    })

    test("Read again card test", () => {
         render(<TestCard value={1} title="Test Card" author="Test author" numberOfReads="1.9k reads" timeToRead="13-minute read" isFinished={false} readAgain={true} />)

        const title = screen.getByText("Test Card")
        expect(title).toBeInTheDocument()

        const author = screen.getByText("Test author")
        expect(author).toBeInTheDocument()

        const readAgain = screen.getByText("Read Again")
        expect(readAgain).toBeInTheDocument()

        const numberOfReads = screen.getByText("1.9k reads")
        expect(numberOfReads).toBeInTheDocument()

        const timeToRead = screen.getByText("13-minute read")
        expect(timeToRead).toBeInTheDocument()
    })

    test("Add To Library card test", () => {
        render(<TestCard value={1} title="Test Card" author="Test author" numberOfReads="1.9k reads" timeToRead="13-minute read" isFinished={false} addToLibrary={true} />)

        const title = screen.getByText("Test Card")
        expect(title).toBeInTheDocument()

        const author = screen.getByText("Test author")
        expect(author).toBeInTheDocument()

        const addToLibrary = screen.getByText("Add To Library")
        expect(addToLibrary).toBeInTheDocument()

        const numberOfReads = screen.getByText("1.9k reads")
        expect(numberOfReads).toBeInTheDocument()

        const timeToRead = screen.getByText("13-minute read")
        expect(timeToRead).toBeInTheDocument()
    })
})