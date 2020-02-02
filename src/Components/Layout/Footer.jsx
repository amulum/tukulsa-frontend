import React from "react";
// EXPORT DEFAULT
import { withRouter } from "react-router-dom";

// IMPORT MUI ELEMENT
import { Paper, Tabs, Tab } from "@material-ui/core";
// IMPORT MUI ICONS

const Header = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <Paper>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Paper>
  );
};

export default withRouter(Header);
