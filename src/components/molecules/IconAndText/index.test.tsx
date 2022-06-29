import { render, screen } from "@testing-library/react";
import  { IconAndText } from ".";
import { ReactComponent as User } from "../../../images/user.svg";

describe("Icon And Text test", () => {
    test("User test", () => {
        render(<IconAndText iconSource={<User />} title={"1.9k reads"} variant="body1" />)
        const element = screen.getByText("1.9k reads")
        expect(element).toBeInTheDocument()
    })
})