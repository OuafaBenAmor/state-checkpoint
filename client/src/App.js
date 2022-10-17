import React from "react";
import "./App.css";
import Profile from "./profile/profile";
import Pic from "./pic.jpg";

class App extends React.Component {
  constructor(person) {
    super(person);

    this.state = {
      fullName: " Ouafa BENAMOR ",
      profession: "Head Designer ",
      bio: " She is a creative Head Designer and Strategist Marketer ",
      pic: <img src={Pic} alt="pic.jpg" />,
      show: false,
      time: 0,
    };
  }

  handleClick = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>
          {" "}
          {this.state.show ? "hide profile" : " show profile "}{" "}
        </button>

        {this.state.show && (
          <Profile
            fullName={this.state.fullName}
            profession={this.state.profession}
            bio={this.state.bio}
            pic={this.state.pic}
          />
        )}
      </div>
    );
  }
}

export default App;
