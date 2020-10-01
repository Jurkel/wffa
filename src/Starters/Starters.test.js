import React from "react";
import { shallow } from "enzyme";
import Starters from "./Starters";

it("renders Starters component", () => {
  const mockProps = {
    starters: [
      {
        player: {
          position: "",
          full_name: "",
          team: "",
        },
      },
    ],
  };
  expect(shallow(<Starters {...mockProps} />)).toMatchSnapshot();
});