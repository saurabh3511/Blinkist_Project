import {  render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Entrepreneurship } from ".";
import  {Banner} from "../../molecules/Banner/index";
import Categories from "../../organisms/BookCategories/index";
import Library from "../../../data/Library";
import Sizes from "../../organisms/SearchBarFunction/index";

describe("Entrepreneurship Page", () => {
  test("Existence test", () => {
    render(
      <MemoryRouter>
        <Entrepreneurship
          banner={<Banner />}
          sizes={<Sizes setTitle />}
          trendingBlinks={<Categories data={Library} ftitle='' status="trending" />}
          justAddedBlinks={<Categories data={Library} ftitle='' status="justAdded" />}
          featuredBlinks={<Categories data={Library}  ftitle='' status="featured" />}
        />
      </MemoryRouter>
    );
  });
});