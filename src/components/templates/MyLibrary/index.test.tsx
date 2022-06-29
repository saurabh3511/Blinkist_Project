import { MyLibrary } from ".";
import { Tabs } from "../../organisms/Tabs/index";


describe("My Library Test", () => {
    test("Existence test", () => {
        <MyLibrary
        body={<Tabs />}
        ></MyLibrary>
    })
})
