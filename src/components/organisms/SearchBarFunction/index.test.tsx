
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Sizes from "../../organisms/SearchBarFunction/index";

describe("Entrepreneurship Page", () => {
  test("Existence test", () => {
    render(
      <MemoryRouter>
       <Sizes setTitle = 'Books'/>
      </MemoryRouter>

      
    );
  });
});
