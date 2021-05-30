import React, { Component } from "react";
import BackgroundPhoto from "../images/backgroundphoto.jpg";
import { withStyles } from "@material-ui/styles";
import styled from "styled-components";
import CenteredTabs from "./NavBar";
import TodoList from "../components/VisibleTodoList";

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

class PendingPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <MainContainer className={classes.root}>
          <CenteredTabs tabNumber={1} />
          <br />
          <br />
          <div className="addTodos">
            <h2 style={{ color: "#004d40" }}>List of Pending Todo Items</h2>
          </div>
          <div className="addTodos">
            <TodoList />
          </div>
        </MainContainer>
      </div>
    );
  }
}

export default withStyles(styles)(PendingPage);
