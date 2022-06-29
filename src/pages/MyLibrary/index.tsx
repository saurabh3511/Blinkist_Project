  import { Tabs } from "../../components/organisms/Tabs/index";
import { MyLibrary } from "../../components/templates/MyLibrary/index";

const LibraryPage = () => {
    return (
        <>
            <MyLibrary body={<Tabs />} />
        </>
    )
}

export default LibraryPage