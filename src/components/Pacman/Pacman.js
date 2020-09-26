import React, { Component } from "react";
import "./style.css";
import { ReactComponent as PacmanSvg } from "./pacman.svg";
class Pacman extends Component {

  state = {
    direction: "right",
    position: {
      top: 0,
      left: 0
    }
  };
  constructor(props) {
      super(props);
      this.pacmanRef = React.createRef()
  }
  componentDidMount(){
      this.pacmanRef.current.focus();
  }
  handleKeyDown = (e) => {
    console.log(e.keyCode, e.key);
    
  }
  render() {
    return (
      <div className="pacman" style={this.state.position} ref={this.pacmanRef}
      tabIndex="0"
      onKeyDown={this.handleKeyDown}
      >
        <PacmanSvg />
      </div>
    );
  }
}
Pacman.defaultProps = {
  step: 50,
  size: 50, //pacman size
  //TODO: move to config
  border: 10 * 2,
  topScoreBoardHeight: 50
};
export default Pacman;
