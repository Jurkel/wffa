import { shallow } from "enzyme";
import React from "react";
import Profile from "./Profile";

it("renders Profile component", () => {
  const mockProps = {
    location: {
      state: {
        managerBio: {
          owner_id: "594996794933477376",
          league_id: "590186196781543424",
          firstname: "Laila",
          lastname: "Fitriana",
          height: "5'3",
          weight: 123,
          school: "OSU",
          favoriteteam: "Ohio State University",
          favoriteplayer: "Zeke Elliot",
          experience: "1st year",
          display_name: "lailapfit",
          photolink: "../images/Laila.png",
          active: true,
          dob: "04-25-1990",
        },
        rosterStats: {},
      },
    },
    starters: {},
  };
  expect(shallow(<Profile props={mockProps} />)).toMatchSnapshot();
});