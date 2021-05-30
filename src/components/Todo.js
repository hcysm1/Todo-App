import React from "react";
import PropTypes from "prop-types";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";
import { AiFillEdit } from "react-icons/ai";

const Todo = ({ onClick, completed, text, onClickRemove, onClickEdit }) => (
  <div className="card">
    <FormControlLabel
      style={{
        textDecoration: completed ? "line-through" : "none",
        marginRight: "50px",
        color: "#ffffff",
      }}
      control={
        <Checkbox
          checked={completed}
          onChange={onClick}
          name="checkedB"
          style={{
            color: "#ffffff",
          }}
        />
      }
      label={text}
    />

    <Button
      onClick={onClickRemove}
      style={{
        position: "absolute",
        top: "21px",
        right: "0",
        color: "#ffffff",
      }}
    >
      <DeleteIcon />
    </Button>
    <Button
      onClick={onClickEdit}
      style={{
        right: "30px",
        color: "#ffffff",
      }}
    >
      <AiFillEdit
        style={{
          width: "25px",
          height: "25px",
        }}
      />
    </Button>
  </div>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
