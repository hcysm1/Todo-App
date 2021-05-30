import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FilterLink from "../components/FilterLink";
import { VisibilityFilters } from "../store/actions";

const CenteredTabs = (props) => {
  const [value, setValue] = React.useState(props.tabNumber);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="secondary"
      textColor="#004d40"
      centered
    >
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>
        <Tab
          label="Create Todo"
          href="/create"
          style={{ fontWeight: "bold" }}
        />
      </FilterLink>

      <FilterLink filter={VisibilityFilters.SHOW_PENDING}>
        <Tab
          label="Pending Todo"
          href="/pending"
          style={{ fontWeight: "bold" }}
        />
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        <Tab
          label="Complete Todo"
          href="/complete"
          style={{ fontWeight: "bold" }}
        />
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_DELETED}>
        <Tab
          label="Restore Todo"
          href="/restore"
          style={{ fontWeight: "bold" }}
        />
      </FilterLink>
    </Tabs>
  );
};

export default CenteredTabs;
