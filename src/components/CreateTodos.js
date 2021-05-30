import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../store/actions";
import BackgroundPhoto from "../images/backgroundphoto.jpg";
import { withStyles } from "@material-ui/styles";
import styled from "styled-components";
import CenteredTabs from "../components/NavBar";
import TodoList from "../components/VisibleTodoList";
import Input from "@material-ui/core/Input";

const styles = (theme) => ({
  root: {
    backgroundImage: `url(${BackgroundPhoto})`,
    backgroundRepeat: "repeat",
    backgroundSize: "fit",
  },
});

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  height: 100vh;
  overflow: auto;
`;

const CreateTodos = ({ dispatch, classes }) => {
  let input;

  return (
    <div>
      <MainContainer className={classes.root}>
        <CenteredTabs tabNumber={0} />

        <br />
        <br />
        <div className="addTodos">
          <h2 style={{ color: "#004d40" }}>Create and Edit a Todo Item</h2>
        </div>
        <br />
        <br />
        <div className="addTodos">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!input.value.trim()) {
                return;
              }
              dispatch(addTodo(input.value));
              input.value = "";
              input.focus();
            }}
          >
            <Input
              type="text"
              placeholder="Add Item..."
              className="todo-input"
              name="todo"
              inputRef={(node) => (input = node)}
              style={{
                fontWeight: "fontWeightMedium",
              }}
            />
          </form>
        </div>
        <div className="addTodos">
          <TodoList />
        </div>
      </MainContainer>
    </div>
  );
};

export default connect()(withStyles(styles)(CreateTodos));
