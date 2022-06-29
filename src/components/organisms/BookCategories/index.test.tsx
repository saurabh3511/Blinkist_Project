import {  render, screen } from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom'
import BookCategories from '.'
import Library from "../../../data/Library";

let TestBookCategories = (args: any) => {
    return (
        <BrowserRouter>
            <BookCategories {...args} />
        </BrowserRouter>
    )
}

describe("Book categories test", () => {
    test("Trending test", () => {
        
        render(<TestBookCategories data={Library} ftitle=" " status="trending" />)
        let beingBossCard = screen.getByText("Being Boss")

        expect(beingBossCard).toBeInTheDocument()
    })

    test("Featured test", () => {
        render(<TestBookCategories data={Library} ftitle=" " status="featured" />)
        let humanToWorkCard = screen.getByText("Bring Your Human to Work")

        expect(humanToWorkCard).toBeInTheDocument()
    })

    test("Just Added test", () => {
        render(<TestBookCategories data={Library} ftitle=" " status="justAdded" />)
        let theLonelyCentury = screen.getByText("The Lonely Century")

        expect(theLonelyCentury).toBeInTheDocument()
    })
})