import {render , screen} from '@testing-library/react'
import Icons from '.'
import BlinkistLogo from '../../../images/blinkistlogo.svg'

describe("display logo", () => {
    test("should display logo",() => {
        render(<Icons source = {BlinkistLogo} />)
        const logo = screen.getByRole("img")
        expect(logo).toBeInTheDocument()
    })
});