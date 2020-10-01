import React from "react";
import { shallow } from "enzyme";
import Stats from "./Stats";

it("renders Stats component", () => {
  const mockProps = {
    rosterData: {
      settings: {
        wins: 1,
        waiver_position: 10,
        waiver_budget_used: 45,
        total_moves: 0,
        ties: 0,
        ppts_decimal: 58,
        ppts: 231,
        losses: 1,
        fpts_decimal: 78,
        fpts_against_decimal: 78,
        fpts_against: 230,
        fpts: 214,
      },
    },
  };
  expect(shallow(<Stats {...mockProps} />)).toMatchSnapshot();
});
