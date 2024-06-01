import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import injectSheet from "react-jss";
import { Scrollama, Step } from "react-scrollama";

const styles = {
  main: {
    padding: "70vh 2vw",
    display: "flex",
    fontFamily: "Helvetica",
    justifyContent: "space-between"
  },
  graphic: {
    flexBasis: "60%",
    position: "sticky",
    width: "100%",
    padding: "5rem 0",
    top: "160px",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    "& p": {
      fontSize: "5rem",
      textAlign: "center",
      color: "#000"
    }
  },
  scroller: {
    flexBasis: "35%"
  },
  step: {
    margin: "0 auto 2rem auto",
    paddingTop: 200,
    paddingBottom: 200,
    border: "1px solid #333",
    "& p": {
      textAlign: "center",
      padding: "1rem",
      fontSize: "1.5rem"
    },
    "&:last-child": {
      marginBottom: 0
    }
  }
};

class Graphic extends PureComponent {
  state = {
    data: 0,
  };

  onStepEnter = ({ element, data }) => {
    element.style.backgroundColor = "lightgoldenrodyellow";
    this.setState({ data });
  };

  onStepExit = ({ element }) => {
    element.style.backgroundColor = "#fff";
  };

  render() {
    const { data, steps } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.main}>

        <div className={classes.scroller}>
          <Scrollama
            onStepEnter={this.onStepEnter}
            onStepExit={this.onStepExit}
            offset={0.33}
            //debug
          >
            <Step data={1}>
              <div className={classes.step}>
                <p>The percentage of female graduate students in science and engineering fields at Columbia has remained virtually unchanged since 1998. </p></div>
            </Step>
            <Step data={2}>
              <div className={classes.step}>
                <p>However, the overall stagnation in the representation of female graduate students in science and engineering shrouds a more complicated picture underneath. </p></div>
            </Step>
            <Step data={3}>
              <div className={classes.step}>
                <p>Some fields have seen a large increase in the representation of female graduate students. From 2003 to 2016, mathematics and statistics quickly reached and maintained sex parity. </p></div>
            </Step>
          </Scrollama>
        </div>

        <div className={classes.graphic}>
          <Scrollama
            offset={0.1}
            //debug
          >
            <Step data={1}>
              <div className={classes.step}>Chart 1</div>
            </Step>
            <Step data={2}>
              <div className={classes.step}>Chart 2</div>
            </Step>
          </Scrollama>
        </div>

      </div>
    );
  }
}

export const StyledGraphic = injectSheet(styles)(Graphic);
