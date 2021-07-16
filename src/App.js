import React, { Component } from "react";
import Section from "components/Section";
import FeedbackOptions from "components/FeedbackOptions";

import "./App.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = (option) => {
    this.setState((prevState) => {
      console.log(option);
      return { [option]: prevState[option] + 1 };
    });
  };

  render() {
    // const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Your feedback is very important for us!">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {/* <Section>
          <Statistics good={} neutral={} bad={} total={} positivePercentage={}/>
        </Section> */}
      </>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Приветик</h1>
//     </div>
//   );
// }

export default App;
