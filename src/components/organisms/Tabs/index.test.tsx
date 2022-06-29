import {screen, render} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import {Tabs} from './'

let TestTabs = () => {
    return (
        <MemoryRouter>
            <Tabs />
        </MemoryRouter>
    )
}

describe("Tabs test", () => {
    test("Is finished test", () => {
        render(<TestTabs />)

        let isFinished = screen.getAllByText("Finished")
        expect(isFinished[0]).toBeInTheDocument()
    })
})
