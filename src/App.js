import React, { Component } from "react";

import "./App.css";
import Display from "./components/Display/display";
import Keypad from "./components/Keypad/keypad";

class App extends Component {
  constructor(props) {
    super(props);
    this.keyboardHandler = this.keyboardHandler.bind(this);
  }

  state = {
    secCalc: "",
    primCalc: "",
  };

  // Handler for Mouse clicks inside App
  buttonHandler = (event) => {
    var currCal = this.state.secCalc;
    var prevCal = this.state.primCalc;

    try {
      // Calculate/Display final value
      if (event === "=") {
        this.setState({ secCalc: prevCal + event });
        let result = eval(prevCal).toString().substr(0, 9);
        this.setState({ primCalc: result });
      } else {
        // Will get digit here
        if (Number.isInteger(parseInt(event))) {
          this.setState({ primCalc: prevCal + event });
        }
        // Will get operands here
        if (isNaN(event)) {
          // Backspace/Delete Button Pressed
          if (event === "D") {
            if (currCal !== "" && prevCal !== "") {
              this.setState({ secCalc: "" });
              this.setState({ primCalc: prevCal });
            } else if (currCal === "" && prevCal !== "") {
              let val = prevCal.toString().slice(0, -1);
              this.setState({ primCalc: val });
              console.log(prevCal);
            } else {
              let val = prevCal.slice(0, prevCal.length - 1);
              this.setState({ primCalc: val });
            }
          }
          // C Button pressed
          else if (event === "C") {
            this.setState({ primCalc: "" });
            this.setState({ secCalc: "" });
          }
          // CE Button pressed
          else if (event === "CE") {
            this.setState({ secCalc: "" });
          }
          // Appending input into main display
          else {
            this.setState({ primCalc: prevCal + event });
          }
        }
      }
    } catch (error) {
      this.setState({ primCalc: "Syntax Error" });
    }
  };

  // Handler for Keypress from Keyboard
  keyboardHandler() {
    document.addEventListener("keydown", (e) => {
      const event = e.key.toString();
      var currCal = this.state.secCalc;
      var prevCal = this.state.primCalc;

      try {
        // Calculate/Display final value
        if (event === "=" || event === "Enter") {
          this.setState({ secCalc: prevCal + "=" });
          let result = eval(prevCal).toString().substr(0, 9);
          this.setState({ primCalc: result });
        } else {
          // Will get digit here
          if (Number.isInteger(parseInt(event))) {
            this.setState({ primCalc: prevCal + event });
          }
          // Will get operands here
          if (isNaN(event)) {
            // Backspace/Delete Button Pressed
            if (event === "Backspace") {
              if (currCal !== "" && prevCal !== "") {
                this.setState({ secCalc: "" });
                this.setState({ primCalc: prevCal });
              } else if (currCal === "" && prevCal !== "") {
                let val = prevCal.toString().slice(0, -1);
                this.setState({ primCalc: val });
                console.log(prevCal);
              } else {
                let val = prevCal.slice(0, prevCal.length - 1);
                this.setState({ primCalc: val });
              }
            }
            // Ctcl Button means C pressed
            else if (event === "Control") {
              this.setState({ primCalc: "" });
              this.setState({ secCalc: "" });
            }
            // Alt Button means CE pressed
            else if (event === "Alt") {
              this.setState({ secCalc: "" });
            }
            // Appending input into main display
            else {
              let opArr = ["/", "*", "-", "+", "%", "."]
              if (opArr.includes(event)) {
                this.setState({ primCalc: prevCal + event });
              }
            }
          }
        }
      } catch (error) {
        this.setState({ primCalc: "Syntax Error" });
      }
    });
  }

  render() {
    return (
      <div className="app_container" onClick={this.keyboardHandler}>
        {/* Text that appears on left side of calculator */}
        <div className="sidetext">
          <p>Assignment #2</p>
          <p className="apptitle">Calculator App</p>
          <p>Mobile Application Development</p>
          <h2 className="instructions">Instructions:</h2>
          <p>To use this app with keyboard:</p>
          <h4>CTRL &rarr; C</h4>
          <h4>Alt &rarr; CE</h4>
          <h4>Enter &rarr; &#x3d;</h4>
          <p className="credits">Designed & Developed by</p>
          <h2>Haseeb Ahmed Saeed</h2>
          <p>CU/SP18-BCS-063/6A</p>
        </div>
        
        {/* The Main Calculator Component */}
        <div className="app">
          <div>
            {/* Calculator Screens/Display Component */}
            <Display
              secCalc={this.state.secCalc}
              primCalc={this.state.primCalc}
            />
          </div>
          <div>
            {/* Calculator Keypad/Buttons Component */}
            <Keypad onClick={this.buttonHandler} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
