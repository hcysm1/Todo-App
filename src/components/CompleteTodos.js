import React, { Component } from "react";
import BackgroundPhoto from "../images/backgroundphoto.jpg";
import { withStyles } from "@material-ui/styles";
import styled from "styled-components";
import CenteredTabs from "../components/NavBar";
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
const SubContainer = styled.div`
  display: flex;
  flex-basis: 100%;
  margin: auto;
  padding: 10px;
  width: 80vw;
`;
class CompletePage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <MainContainer className={classes.root}>
          <CenteredTabs tabNumber={2} />

          <br />
          <br />
          <div className="addTodos">
            <h2 style={{ color: "#004d40" }}>List of Completed Todo Items</h2>
          </div>
          <div className="addTodos">
            <TodoList />
          </div>
        </MainContainer>
      </div>
    );
  }
}

export default withStyles(styles)(CompletePage);
