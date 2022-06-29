import {screen, render} from '@testing-library/react'
import IconButton from '.'
import { ReactComponent as SearchIcon } from "../../../images/search.svg";
import { ReactComponent as DropdownIcon } from "../../../images/downarrow.svg";

describe("Icon Button Test", () => {
    test("Checking for search icon", () => {
        render(<IconButton children={<SearchIcon />} />)
        const iconBtn = screen.getByRole("button")
        expect(iconBtn).toBeInTheDocument()
    })

    test("Checking for dropdown icon", () => {
        render(<IconButton children={<DropdownIcon />} />)
        const iconBtn = screen.getByRole("button")
        expect(iconBtn).toBeInTheDocument()
    })
})
