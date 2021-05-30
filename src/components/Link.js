import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

const Link = ({ children, onClick }) => (
  <Button
    onClick={onClick}
    style={{
      marginLeft: "4px",
    }}
  >
    {children}
  </Button>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
