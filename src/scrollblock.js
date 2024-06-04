import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import injectSheet from "react-jss";
import { Scrollama, Step } from "react-scrollama";

const styles = {
  main: {
    padding: "30vh 2vw",
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
  },
  chart1: {
    width: "100%",
    height: "600px"
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="792"
                  height="792"
                  viewBox="0 0 612 792"
                >
                  <defs>
                    <linearGradient id="XMLID_13_">
                      <stop offset="0%" stop-color="stop-color:#FFFFFF" />
                      <stop offset="100%" stop-color="stop-color:#7F3F98" />
                    </linearGradient>
                  </defs>

                  <circle id="circleback" class="st1" cx="306" cy="396" r="252.7" />
                  <g className="texthid">
                    <path id="XMLID_6_" class="st0" d="M306,162.3l-42.6-15.5C191.8,208,263,357.7,306,357.7S420.2,208,348.6,146.8 C348.6,146.8,306,162.3,306,162.3z" />
                  </g>
                  <text id="XMLID_5_" transform="matrix(1 0 0 1 293.6883 123.8535)" class="st3 st4">2017</text>
                  <g className="texthid">
                    <path id="XMLID_13_" fill="url('#XMLID_13_')" class="st1" d="M306,249.6l-23.6-8.6c-39.6,33.8-0.2,116.7,23.6,116.7c23.8,0,63.2-82.8,23.6-116.7 C329.6,241,306,249.6,306,249.6z" />
                    <text id="XMLID_5_" transform="matrix(1 0 0 1 290.6107 284.0294)" class="st3 st4">1530</text>
                  </g>
                  <g className="texthid">
                  <path id="XMLID_4_" class="st0" d="M472.1,232.5L453,191.4c-93.9-7.4-149.4,148.8-119,179.2c30.4,30.4,186.6-25.1,179.2-119 C513.2,251.7,472.1,232.5,472.1,232.5z"/>
                  </g>
                  <g className="texthid">
                  <path id="XMLID_8_" class="st1" d="M393.4,312l-8.2-17.6c-40.1-3.2-63.9,63.6-50.9,76.6c13,13,79.8-10.7,76.6-50.9 C411,320.2,393.4,312,393.4,312z"/>  
                  <text id="XMLID_5_" transform="matrix(1 0 0 1 361.722 340.0294)" class="st3 st4">980</text>
                  </g>


                </svg>
              </div>
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
          //debug
          >
            <Step data={1}>
              <div>
                <iframe src='https://flo.uri.sh/visualisation/18202623/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameBorder='0' scrolling='no' className={classes.chart1} sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
              </div>
            </Step>
          </Scrollama>
        </div>

      </div >
    );
  }
}

export const StyledGraphic = injectSheet(styles)(Graphic);
