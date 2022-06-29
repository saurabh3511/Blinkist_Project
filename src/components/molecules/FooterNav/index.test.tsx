import { render, screen } from "@testing-library/react";
import {FooterNav} from './index'
import {FooterNavData} from '../../../data/FooterNavData'

describe("Footer Nav Test", () => {
    test("Editorial test", () => {
        render(<FooterNav data={FooterNavData.Editorial.data} title={FooterNavData.Editorial.title} />)
        const element = screen.getByText("Editorial")
        expect(element).toBeInTheDocument();
    })

    test("Useful links test", () => {
        render(<FooterNav data={FooterNavData.UsefulLinks.data} title={FooterNavData.UsefulLinks.title} />)
        const element = screen.getByText("Useful Links")
        expect(element).toBeInTheDocument();
    })

    test("Company test", () => {
        render(<FooterNav data={FooterNavData.Company.data} title={FooterNavData.Company.title} />)
        const element = screen.getByText("Company")
        expect(element).toBeInTheDocument();
    })
})