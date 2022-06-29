import { BookDescription } from "../../organisms/BookDescription";
import  Footer  from "../../organisms/Footer";
import { HeaderComponent } from "../../organisms/Header";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { BookDetails } from "./index";

describe("Book Details Template Test", () => {
  test("Should exist", () => {
    render(
      <MemoryRouter>
        <BookDetails
          header={<HeaderComponent />}
          body={<BookDescription />}
          footer={<Footer />}
        />
      </MemoryRouter>
    );
  });
});
