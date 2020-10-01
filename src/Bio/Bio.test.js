import { shallow } from "enzyme";
import React from "react";
import Bio from "./Bio";

it("renders Bio component", () => {
  const mockProps = {
    managerData: {
      height: "",
      weight: "",
      dob: "",
      school: "",
      experience: "",
      favoriteteam: "",
      favoriteplayer: "",
    },
  };

  expect(shallow(<Bio {...mockProps} />)).toMatchSnapshot();
});
