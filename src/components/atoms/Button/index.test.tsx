import { render, screen } from "@testing-library/react"
import { ButtonComponent } from ".";
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

describe("Button Test", () => {
    test("Button with start icon and text", () => {
        render(<ButtonComponent startIcon={<ArrowForwardIcon />} children="Add to library"/>)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument();
    });

    test("Button with end icon and text", () => {
        render(<ButtonComponent endIcon={<AddIcon />} children="Add to library"/>)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument();
    });

    // test("Button with Text", () => {
    //     render(<ButtonComponent children="Connect" />)
    //     const button = screen.getByRole('button')
    //     expect(button).toBeInTheDocument();
    // })
})