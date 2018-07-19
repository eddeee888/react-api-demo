import React from "react";
import TextField from "./../common/components/TextField";
import renderer from "react-test-renderer";

it("TextField renders correctly", () => {
  const tree = renderer
    .create(
      <TextField
        id="TestId"
        className="TestName"
        placeholder="TestPlaceholder"
        label="TestLabel"
        value="TestValue"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
